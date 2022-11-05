import { gql } from "apollo-server";

export default gql`
type Authpost {
    id : Int!
    userId : Int!
    title : String!
    text : String!
    authUserId : Int!
    campaignPostId : Int!
    hashtag : [String]
    photo : [String]
    views : Int!
    participant : Int
    isfund : Boolean
    user : User
}
`