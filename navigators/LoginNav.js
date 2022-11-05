import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Text, TouchableOpacity } from "react-native"
import { WithLocalSvg } from "react-native-svg";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function LoginNav(){
    const [fontLoading, setFontLoading] = useState(true);
    const loadFonts = async()=>{
        await Font.loadAsync({
            Jalnan: require("../assets/fonts/Jalnan.otf"),
        })
    }
    if (fontLoading){
        return(
            <AppLoading
                startAsync={loadFonts}
                onFinish={()=>setFontLoading(false)}
                onError={console.log("App Loading Error")}
            />
        )
    }
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
				options={{
					title: "로그인",
					headerTitleAlign: "center",
					headerBackTitle: () => null,
					headerTitle: () => (
						<Text
							style={{
                                fontFamily: "Jalnan",
                                fontSize: 18,
							}}
						>
							로그인
						</Text>
					),
				}}
            />
        </Stack.Navigator>
    );
}