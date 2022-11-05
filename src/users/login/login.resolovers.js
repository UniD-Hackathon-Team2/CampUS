import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    Mutation: {
		login: async (_, { userId, userPassword }) => {
			const user = await client.user.findFirst({ where: { userId } });
			if (!user) {
				return {
					ok: false,
					error: "User not found.",
				};
			}
			const passwordOk = await bcrypt.compare(userPassword, user.userPassword);
			if (!passwordOk) {
				return {
					ok: false,
					error: "Incorrect password.",
				};
			}
			const token = await jwt.sign({id : user.id}, process.env.SECRET_KEY);
			return {
				ok : true,
				token,
			};
		},
    },
};
