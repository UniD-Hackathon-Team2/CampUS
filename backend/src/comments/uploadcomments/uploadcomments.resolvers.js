import client from "../../client"
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadcomments: protectedResolver(
            async (_, {campaignpostId, text}, {loggedInUser}) => {
                console.log(loggedInUser.id);
                return client.comment.create({
                    data: {
                        writerId : loggedInUser.id,
                        campaignpostId,
                        text,
                    }
                });
        }), 
    },
};