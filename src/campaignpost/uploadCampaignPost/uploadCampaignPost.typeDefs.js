import { gql } from "apollo-server";

export default gql`
    scalar Upload
    type Mutation {
        uploadPost(
            title: String,
            text: String,
            location: String,
            maxnum: Int
            hashtag: [String]
            minnum: Int
            isfund: Boolean
        ): CampaignPost
    }
`