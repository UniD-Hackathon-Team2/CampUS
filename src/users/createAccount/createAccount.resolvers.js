import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        createAccount: async (
            _, { userName, gender, userId, userPassword }
        ) => {
            try {
                const existinguserName = await client.user.findFirst({
                    where : {
                        userName
                    },
                });
                const existinguserId = await client.user.findFirst({
                    where : {
                        userId,
                    },
                });
                if(existinguserId) {
                    return {
                        ok : false,
                        error : "This userId is already used",
                    }
                }
                else if(existinguserName){
                    return {
                        ok: false,
                        error : "This userName is already used",
                    }
                }
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
            catch (e) {
                return {
                    ok: false,
                    error: e.message,
                }
            }
        }
    }
}
