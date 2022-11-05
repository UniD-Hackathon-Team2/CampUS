import client from "../../client"
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadCampaignPost: protectedResolver(
            async (_, {title, text, location, maxnum, hashtag, minnum, isfund,views,userId}, {loggedInUser}) => {
                console.log(loggedInUser.id);
                return client.campaignpost.create({
                    data: {
                        title,
                        text,
                        location,
                        maxnum,
                        hashtag,
                        minnum,
                        views,
                        isfund,
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        }
                    }
                });
                console.log(campaignpost);
            return campaignpost;
        }), 
    },
};