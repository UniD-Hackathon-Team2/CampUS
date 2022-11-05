import client from "../../client"
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadCampaignPost: protectedResolver(
            async (_, {title, text, location, maxnum, hashtag, minnum, isfund}, {loggedInUser}) => {

                return client.post.create({
                    data: {
                        title,
                        text,
                        location,
                        maxnum,
                        hashtag,
                        minnum,
                        isfund,
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        }
                    }
                });
        }), 
    },
};