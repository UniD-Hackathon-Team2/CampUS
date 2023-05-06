import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Query: {
        seeCampaignposts: protectedResolver(async (_, __, { loggedInUser }) =>
            client.campaignpost.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                where: {
                    user: {
                        id: loggedInUser.id,
                    },
                },
            })
        ),
    },
};