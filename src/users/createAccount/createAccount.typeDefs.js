import { gql } from "apollo-server";

export default gql`
    type Mutation {
        createAccount(
        userName: String!
        gender : String!
        userId: String!
        hashtag: [String]
        userPassword: String!
        ): MutationResponse!
    }
`;
