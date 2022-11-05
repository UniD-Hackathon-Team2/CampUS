import client from "../client"

export default {
    CampaignPost: {
        user: ({userId}) => {
            return client.user.findUnique({
                where: {
                    id: userId
                }
            });
        },
    },
};