import { gql } from "apollo-server";

export default gql`
type CampaignPost {
    id : Int!
    userId : Int!
    createdAt : String!
    title : String!
    text : String!
    location : String!
    maxnum : Int!
    minnum : Int!
    hashtag : [String]
    photo : [String]
    views : Int!
    isfund : Boolean
    user : User
    authPosts : [AuthPost]
    comments : [Comment]
}
type AuthPost {
    id : Int!
    createdAt : String!
    photo : [String]
    title : String!
    campaignPostId : Int!
    authUserId : Int!
    text : String!
}
type Comment {
    id : Int!
    userId : Int!
    authId : Int!
    campaignpostId : Int!
    createAt : String!
    text : String!
}
`