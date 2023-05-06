import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Query: {
        seecomments: protectedResolver(async (_, {campaignpostId}, { loggedInUser }) =>
            client.comment.findMany({
                where: {
                    campaignpostId
                },
            })
        ),
    },
};