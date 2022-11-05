import { gql } from "apollo-server";

export default gql`
type Campaignpost {
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
    participant : Int
    isfund : Boolean
    user : User
    nowMoney : Int
    needMoney : Int
    duedate : String
}
`