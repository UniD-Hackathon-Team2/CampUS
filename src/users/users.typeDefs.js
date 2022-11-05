import { gql } from "apollo-server";

export default gql`
type User {
    id : Int!
    name : String!
    createdAt : String!
    userName : String!
    userId : String!
    userPassword : String!
    participatedPost : Int
    hashtag : [String]
    campaignposts : [Campaignpost]
}
`;
