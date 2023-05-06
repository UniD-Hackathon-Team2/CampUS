import { gql } from "apollo-server";

export default gql`
    type Query {
        seePost(id: Int!): Campaignpost
    }
`;