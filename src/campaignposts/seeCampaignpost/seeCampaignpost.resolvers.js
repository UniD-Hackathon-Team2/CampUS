import client from "../../client";

export default {
    Query: {
        seePost: (_, { id }) => {
            const post = client.campaignpost.findUnique({
                where: {
                    id
                },
            });       
            return post;
        }
    },
};