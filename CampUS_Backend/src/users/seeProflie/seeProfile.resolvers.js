import client from "../../client";

export default {
    Query: {
        seeProfile: (_, { userName }) => {
            console.log("test");
            let user = client.user.findUnique({
                where: {
                    userName,
                },
            })
            return user;
        }
    },
};
