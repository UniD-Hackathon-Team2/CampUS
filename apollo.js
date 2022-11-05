import { ApolloClient, InMemoryCache, makeVar, split } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/link-context";
import { offsetLimitPagination, getMainDefinition } from "@apollo/client/utilities";
import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

const TOKEN = "token";

export const logUserIn = async (token) => {
	await AsyncStorage.setItem(TOKEN, token);
	isLoggedInVar(true);
	tokenVar(token);
	console.log("login complete!");
};

const uploadHttpLink = createUploadLink({
    uri: "http://10.0.2.2:4000/graphql"
});

const wsLink = new WebSocketLink({
	uri: "ws://10.0.2.2:4000/graphql",
	options: {
		connectionParams: () => ({
			token: tokenVar(),
		}),
		reconnect: true
	},
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			token: tokenVar(),
		},
	};
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		console.log("GraphQL Error", graphQLErrors);
	}
	if (networkError) {
		console.log("Network Error", networkError);
	}
});

const httpLinks = authLink.concat(onErrorLink).concat(uploadHttpLink);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLinks
);

const client = new ApolloClient({
	link: splitLink,
	cache,
});

export default client;