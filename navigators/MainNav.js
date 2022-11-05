import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Text, TouchableOpacity } from "react-native"
import { WithLocalSvg } from "react-native-svg";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function MainNav(){
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
        <Stack.Navigator
            screenOptions={{
                headerTintColor: "black",
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "black",
                    shadowOffset: {
                        width: 0,
                        height: 10
                    }
                }
            }}
        >
            <Stack.Screen
                name="Home"
                options={{
                    headerBackTitle: ()=> null,
                    headerLeft: () => null,
                    headerTitle: ()=> (
                        <Text style={{fontSize: 24, fontFamily: 'Jalnan', marginTop: 10}}>홈</Text>
                    ),
                    headerTitleAlign: "center"
                }}
                component={Home}
            />
        </Stack.Navigator>
    )
}