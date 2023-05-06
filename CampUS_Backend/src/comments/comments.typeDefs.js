import { gql } from "apollo-server";

export default gql`
type Comment {
    id : Int!
    writerId : Int
    campaignpostId : Int
    text : String
}
`