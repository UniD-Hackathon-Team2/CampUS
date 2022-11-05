import { gql } from "apollo-server";

export default gql`
    type Mutation {
        uploadCampaignPost(
            title: String,
            text: String,
            location: String,
            maxnum: Int
            hashtag: [String]
            minnum: Int
            isfund: Boolean
            views : Int
        ): Campaignpost
    }
`