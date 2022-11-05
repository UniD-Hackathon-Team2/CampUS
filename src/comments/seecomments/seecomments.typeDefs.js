import { gql } from "apollo-server";

export default gql`
    type Mutation {
        seecomments(
            campaignpostId : Int,
        ): [Comment]
    }
`