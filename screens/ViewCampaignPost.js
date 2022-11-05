import React from 'react';
import styled from 'styled-components';
import {
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  Pressable,
} from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from '../colors';
import SharePurple from '../assets/icon/share_button_purple.svg';
import CommentPurple from '../assets/icon/comment_purple.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const DATA = {
  title: '일회용품 줄이기 같이 참여해주세요',
  writer: '환경 지키미',
  part: 30,
  minPart: 60,
  maxPart: 100,
  type: 'offline',
  deadline: null,
  hashtag: ['#환경 보호', '#서울', '#일회용품'],
  content: `일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...`,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9reSShWPUtrTb5URWhbrvzfhjK9mCMj9MugKxy7BoSwnv6Hbk_scmM5zjm3f0203O5Pc&usqp=CAU',
  viewCount: 1023,
  commentCount: 2,
  isFundrasing: true,
  goalFundraised: 500000,
  currentFundrasied: 127000,
  createdAt: '2022.11.05 22:01',
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = 1.0;
const AndroidBottomBarHeight =
  Height - Dimensions.get('window').height - StatusBar.currentHeight;
const radius = 30;
const FundRatio = () => {
  const ratio = (DATA.currentFundrasied / DATA.goalFundraised) * 100;
  return ratio;
};
const partRatio = () => {
  const ratio = (DATA.part / DATA.maxPart) * 100;
  return ratio;
};
export default function WriteAuthPost({ navigation }) {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Image
          source={{ uri: DATA.image }}
          style={{ width: '100%', height: '26%' }}
        />
        <View style={{ padding: 10, paddingVertical: 20 }}>
          <View
            style={{
              borderBottomColor: colors.beige,
              borderBottomWidth: 1,
              flexDirection: 'row',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: FontScale * 18,
                  color: 'black',
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                {DATA.title}
              </Text>

              <Text
                style={{
                  fontSize: FontScale * 12,
                  color: colors.darkGray,
                  marginBottom: 3,
                }}
              >
                {DATA.writer} · {DATA.type}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: Width * 0.5,
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: FontScale * 12,
                    color: colors.darkGray,
                    marginBottom: 10,
                  }}
                >
                  {DATA.createdAt}
                </Text>
                <Text style={{ fontSize: FontScale * 14, color: 'black' }}>
                  {DATA.deadline == null ? '상시 진행' : DATA.deadline}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  backgroundColor: colors.purple,
                  justifyContent: 'center',
                  alignContent: 'center',
                  margin: 10,
                  marginTop: 0,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: FontScale * 18,
                    textAlign: 'center',
                  }}
                >
                  {FundRatio()}%
                </Text>
              </View>
              <Text
                style={{
                  fontSize: FontScale * 12,
                  color: colors.purple,
                  textAlign: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                모금 달성률
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  backgroundColor: colors.darkPurple,
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: FontScale * 18,
                    textAlign: 'center',
                  }}
                >
                  {partRatio()}%
                </Text>
              </View>
              <Text
                style={{
                  fontSize: FontScale * 12,
                  color: colors.darkPurple,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                인원 : {DATA.part}/{DATA.maxPart}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: FontScale * 14,
              color: 'black',
              padding: 15,
              lineHeight: 25,
            }}
          >
            {DATA.content}
          </Text>
          <View style={{ height: Height * 0.15 }} />
          <Text
            style={{
              alignSelf: 'center',
              width: Width * 0.8,
              textAlign: 'right',
              marginBottom: 10,
              fontSize: FontScale * 13,
              fontWeight: 'bold',
              color: colors.purple,
            }}
          >
            목표 금액 : {DATA.currentFundrasied} / {DATA.goalFundraised} 원
          </Text>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <View
              style={{
                width: Width * 0.8,
                height: Height * 0.065,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.purple,
                borderRadius: 10,
                ...Platform.select({
                  ios: {
                    shadowColor: 'rgb(50, 50, 50)',
                    shadowOpacity: 0.5,
                    shadowRadius: 7,
                    shadowOffset: {
                      height: 4,
                      width: 1,
                    },
                  },
                  android: {
                    elevation: 3,
                  },
                }),
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: FontScale * 18,
                }}
              >
                모금 하기
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingBottom: AndroidBottomBarHeight + useSafeAreaInsets().bottom,
        }}
      >
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.darkPurple,
              width: Width * 0.55,
              height: Width * 0.12,
              margin: 10,
              marginRight: 0,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: FontScale * 16,
              }}
            >
              참여 하기
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <WithLocalSvg
            asset={SharePurple}
            width={Width * 0.13}
            height={Width * 0.13}
            style={{ margin: 10 }}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <WithLocalSvg
            asset={CommentPurple}
            width={Width * 0.13}
            height={Width * 0.13}
            style={{ margin: 10, marginLeft: 0 }}
          />
        </Pressable>
      </View>
    </Container>
  );
}
