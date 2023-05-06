import client from "../../client";

export default {
    Query: {
        searchHash: (_, { keyword }) => {
            return client.campaignpost.findMany({
                where: {

                    hashtag: {
                        hasSome: keyword
                    }

                },
            });
        },
    },
};