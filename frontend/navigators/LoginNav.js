import React, {useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native"
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import MainNav from "./MainNav";

const Stack = createStackNavigator();

export default function LoginNav(){
    useEffect(()=> {
        LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
        LogBox.ignoreAllLogs();
    }, [])
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
					headerShown: false
				}}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    headerBackTitle: () => null,
                    headerTItle: () => null
                }}
            />
            <Stack.Screen
                name="MainNav"
                component={MainNav}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}