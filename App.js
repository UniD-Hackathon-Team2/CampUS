import React, {useState} from "react"
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import MainNav from "./navigators/MainNav"
import LoginNav from "./navigators/LoginNav";

import client, { isLoggedInVar, tokenVar } from "./apollo";
import { useReactiveVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";


export default function App() {
	const [loading, setLoading] = useState(true);
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const preload = async()=> {
		const token = await AsyncStorage.getItem("token");
		if(token){
			isLoggedInVar(true);
			tokenVar(token);
		}
	};
	if(loading) {
		return(
			<AppLoading
				startAsync={preload}
				onFinish={()=>setLoading(false)}
				onError={console.log("App Loading Error")}
			/>
		);
	}
	return(
		<ApolloProvider client={client}>
			<NavigationContainer>
				{isLoggedIn == true ? <MainNav /> : <LoginNav />}
			</NavigationContainer>
		</ApolloProvider>
		
	)
}


