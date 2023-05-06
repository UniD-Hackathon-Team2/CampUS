import { gql } from "apollo-server";

export default gql`
    type Query {
        seecomments(
            campaignpostId : Int,
        ): [Comment]
    }
`