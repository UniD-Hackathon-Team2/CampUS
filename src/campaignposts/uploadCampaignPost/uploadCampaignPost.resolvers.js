import client from "../../client"
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadCampaignPost: protectedResolver(
            async (_, {title, text, location, maxnum, hashtag, minnum, isfund,views,duedate,needMoney}, {loggedInUser}) => {
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
                        duedate,
                        needMoney,
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        }
                    }
                });
            }
        ), 
    },
};