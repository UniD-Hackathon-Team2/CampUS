import { gql } from "apollo-server";

export default gql`
type User {
    id : Int!
    name : String!
    createdAt : String!
    userName : String!
    userId : String!
    userPassword : String!
    hashtag : [String]
    campaignPosts : [CampaignPost]
    authPosts : [AuthPost]
    comments : [Comment]
}

type CampaignPost {
    id : Int!
    userid : Int!
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
`;
