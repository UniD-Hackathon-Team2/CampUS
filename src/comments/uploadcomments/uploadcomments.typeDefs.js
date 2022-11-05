import { gql } from "apollo-server";

export default gql`
    type Mutation {
        uploadcomments(
            campaignpostId : Int,
            text : String
        ): Comment
    }
`