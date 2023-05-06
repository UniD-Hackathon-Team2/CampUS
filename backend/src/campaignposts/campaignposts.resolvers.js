import client from "../client"

export default {
    Campaignpost: {
        user: ({userId}) => {
            return client.user.findUnique({
                where: {
                    id: userId
                }
            });
        },
    },
};