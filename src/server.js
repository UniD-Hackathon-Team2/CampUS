require("dotenv").config();
import express from "express";
import http from "http";
import logger from "morgan";

import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema.js";
import { getUser } from "./users/users.utils";

import { graphqlUploadExpress } from "graphql-upload";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

const schema = makeExecutableSchema({ typeDefs, resolvers });

async function startServer() {
  const apollo = new ApolloServer({
    schema,
    uploads: false,
    context: async (ctx) => {
      if (ctx.req) { //http로 통신할때 (req , res)
        return {
          loggedInUser: await getUser(ctx.req.headers.token),
        };
      } else { //http가 아니라 ws로 통신할때
        const {
          connection: { context },
        } = ctx;
        return {
          loggedInUser: context.loggedInUser,
        };
      }
    },
    plugins: [
      ApolloServerPluginLandingPageLocalDefault(),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await apollo.start();
  //임시로 추가
  const app = express();
  const cors = require('cors');
  //임시로 추가
  app.use(cors())
  app.use(logger("tiny"));
  app.use(graphqlUploadExpress());
  apollo.applyMiddleware({ app });
  app.use("/static", express.static("uploads"));
  

  const httpServer = http.createServer(app);

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      async onConnect(connectionParams, webSocket, context) {
        //console.log("onConnect!");
        //새로운 message를 listen 할 때 token이 존재하는지 검사 == login이 되어 있나 검사
        const { token } = connectionParams;
        if (!token) {
          throw new Error(
            "토큰이 존재하지 않기 때문에 웹 소켓에 연결할 수 없습니다."
          );
        }
        const loggedInUser = await getUser(token);
        return { loggedInUser };
      },
      onDisconnect(webSocket, context) {
        //console.log("onDisconnect!");
      },
    },
    { server: httpServer, path: "/graphql" }
  );

  const PORT = process.env.PORT;

  /*
  httpServer.listen(PORT,'192.168.219.145');
  console.log(
    `🚀 Server ready at http://192.168.219.145:${PORT}${apollo.graphqlPath}`
  );
  */
 
  await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 4000 }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}`
  );
  
}
startServer();

