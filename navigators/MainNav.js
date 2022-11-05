import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Text, TouchableOpacity } from "react-native"
import { WithLocalSvg } from "react-native-svg";
import Home from "../screens/Home";
import MyInfo from "../screens/MyInfo";
import Search from "../screens/Search";
import WirteCampainPost from "../screens/WriteCampaignPost";
import WriteAuthPost from "../screens/WriteAuthPost";

const Stack = createStackNavigator();

export default function MainNav({navigation}){
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
            <Stack.Screen
                name="MyInfo"
                options={{
                    headerBackTitle: ()=> null,
                    headerTitle: ()=> (
                        <Text style={{fontSize: 24, fontFamily: 'Jalnan', marginTop: 10}}>내 정보</Text>
                    ),
                    headerTitleAlign: "center",
                }}
                component={MyInfo}
            />
            <Stack.Screen
                name="Search"
                options={{
                    headerBackTitle: ()=> null,
                    headerTitle: ()=> (
                        <Text style={{fontSize: 24, fontFamily: 'Jalnan', marginTop: 10}}>검색</Text>
                    ),
                    headerTitleAlign: "center",
                }}
                component={Search}
            />
            <Stack.Screen
                name="WriteCampaignPost"
                options={{
                    headerBackTitle: ()=> null,
                    headerTitle: ()=> (
                        <Text style={{fontSize: 24, fontFamily: 'Jalnan', marginTop: 10}}>캠페인 작성</Text>
                    ),
                    headerTitleAlign: "center",
                }}
                component={WirteCampainPost}
            />
            <Stack.Screen
                name="WriteAuthPost"
                options={{
                    headerBackTitle: ()=> null,
                    headerTitle: ()=> (
                        <Text style={{fontSize: 24, fontFamily: 'Jalnan', marginTop: 10}}>인증 작성</Text>
                    ),
                    headerTitleAlign: "center",
                }}
                component={WriteAuthPost}
            />
        </Stack.Navigator>
    )
}