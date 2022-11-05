import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text, Image } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import Home from '../screens/Home';
import MyInfo from '../screens/MyInfo';
import Search from '../screens/Search';
import WriteCampaignPost from '../screens/WriteCampaignPost';
import WriteAuthPost from '../screens/WriteAuthPost';
import ViewCampaignPost from '../screens/ViewCampaignPost';

const Stack = createStackNavigator();

export default function MainNav({ navigation }) {
  const [fontLoading, setFontLoading] = useState(true);
  const loadFonts = async () => {
    await Font.loadAsync({
      Jalnan: require('../assets/fonts/Jalnan.otf'),
    });
  };
  if (fontLoading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoading(false)}
        onError={console.log('App Loading Error')}
      />
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 10,
          },
        },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerBackTitle: () => null,
          headerLeft: () => null,
          headerTitle: () => (
            <Image
              source={require('../assets/image/logo.png')}
              style={{
                width: 80,
                height: 30,
                marginTop: 5,
              }}
            />
          ),
          headerTitleAlign: 'center',
        }}
        component={Home}
      />
      <Stack.Screen
        name="MyInfo"
        options={{
          headerBackTitle: () => null,
        }}
        component={MyInfo}
      />
      <Stack.Screen
        name="Search"
        options={{
          headerBackTitle: () => null,
        }}
        component={Search}
      />
      <Stack.Screen
        name="WriteCampaignPost"
        options={{
          headerBackTitle: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontFamily: 'Jalnan', marginTop: 10 }}>
              캠페인 작성
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
        component={WriteCampaignPost}
      />
      <Stack.Screen
        name="WriteAuthPost"
        options={{
          headerBackTitle: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontFamily: 'Jalnan', marginTop: 10 }}>
              인증 작성
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
        component={WriteAuthPost}
      />
      <Stack.Screen
        name="ViewCampaignPost"
        options={{
          headerBackTitle: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontFamily: 'Jalnan', marginTop: 10 }}>
              캠페인 글 보기
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
        component={ViewCampaignPost}
      />
    </Stack.Navigator>
  );
}
