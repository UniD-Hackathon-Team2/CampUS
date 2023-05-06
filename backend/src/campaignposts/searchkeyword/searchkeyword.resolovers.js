import client from "../../client";

export default {
  	Query: {
		searchkeyword: (_, { keyword }) => {
			return client.campaignpost.findMany({
				where: {
							title: {
								contains: keyword
							}
				},
			});
		},
	},
};