import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        createAccount: async (
            _, { userName, gender, userId, userPassword }
        ) => {
            await client.user.create({
                data: {
                    userName,
                    gender,
                    userId,
                    userPassword,
                }
            });
            return {
                ok: true,
            };
        }
    }
}
