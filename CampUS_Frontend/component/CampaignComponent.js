import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { colors } from '../colors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Layout = { Width: Width, Height: Height };
const FontScale = 1.3;

const data = {
  title: '일회용품 줄이기 같이 참여해주세요',
  writer: '환경 지키미',
  part: 30,
  minPart: 60,
  maxPart: 100,
  type: 'online',
  deadline: null,
  hashtag: ['#환경 보호', '#서울', '#일회용품'],
  content: `일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...`,
  image: null,
  viewCount: 1023,
  commentCount: 2,
};

const ProgressBar = (data) => {
  const purple = data.part / data.maxPart;
  const redBool = data.part < data.minPart;
  const red = redBool ? (data.minPart - data.part) / data.maxPart : 0;
  const barWidth = Width * 0.26;
  return (
    <View
      style={{
        width: barWidth,
        height: 3,
        backgroundColor: colors.darkGray,
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          backgroundColor: colors.darkPurple,
          width: barWidth * purple,
          height: 3,
        }}
      />
      <View
        style={{ backgroundColor: 'red',
          width: barWidth * red, height: 3 }}
      ></View>
    </View>
  );
};

export default function CampaignComponent(data) {
	const navigation = useNavigation();
  	return (
		<TouchableOpacity
			onPress={()=>navigation.navigate("ViewCampaignPost", {
				data: data
			})}
			style={{
				marginTop: 10,
				marginBottom: 10,
				borderRadius: 10,
				backgroundColor: '#F7F7FB',
				width: Layout.Width * 0.86,
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
					elevation: 5,
				},
				}),
				padding: 20,
			}}
		>
			<Text
				style={{
				color: 'black',
				fontWeight: 'bold',
				fontSize: FontScale * 14,
				marginBottom: 5,
				}}
			>
				{data.title}
			</Text>
			<Text
				style={{
				color: '#6f6f6f',
				fontSize: FontScale * 9,
				marginBottom: 20,
				}}
			>
				{data.writer}
			</Text>
			<View
				style={{
				flexDirection: 'row',
				marginBottom: 10,
				justifyContent: 'space-between',
				width: Width * 0.54,
				fontSize: FontScale * 9,
				}}
			>
				<Text style={{ fontSize: FontScale * 9 }}>모집중</Text>
				<View style={{ flexDirection: 'column' }}>
				<Text style={{ textAlign: 'right', fontSize: FontScale * 9 }}>
					{data.part} / 100
				</Text>
					{ProgressBar(data)}
				</View>
			</View>
			<View
				style={{
				flexDirection: 'row',
				marginBottom: 20,
				justifyContent: 'space-between',
				width: Width * 0.54,
				}}
			>
				<Text style={{ fontSize: FontScale * 9 }}>{data.type}</Text>
				<Text style={{ fontSize: FontScale * 9 }}>
				{data.deadline != null ? data.deadline : '상시 진행'}
				</Text>
			</View>
			<Text
				style={{
				color: '#6f6f6f',
				fontSize: FontScale * 10,
				marginBottom: 10,
				}}
			>
				{data.content}
			</Text>
			<View style={{ flexDirection: 'row' }}>
				{data.hashtag &&
				data.hashtag.map((item, idx) => {
					return idx == 0 ? (
					<Pressable
						style={({ pressed }) => ({
						opacity: pressed ? 0.5 : 1,
						})}
						onPress={() => {}}
					>
						<View style={styles.hashtag} key={item}>
						<Text style={{ color: 'white' }}>{item}</Text>
						</View>
					</Pressable>
					) : (
					<Pressable
						style={({ pressed }) => ({
						opacity: pressed ? 0.5 : 1,
						})}
						onPress={() => {}}
					>
						<View style={[styles.hashtag, styles.hashtagFirst]} key={item}>
						<Text style={{ color: '#645CAA' }}>{item}</Text>
						</View>
					</Pressable>
					);
				})}
			</View>
			<View
				style={{
				flexDirection: 'row',
				justifyContent: 'flex-end',
				marginTop: 10,
				}}
			>
				<Text
				style={{
					color: 'black',
					fontSize: FontScale * 9,
					marginRight: 10,
					alignSelf: 'flex-end',
				}}
				>
				{/* {data.viewCount} {data.commentCount} */}
				조회 {data.viewCount}
				</Text>
				<Text
				style={{
					color: 'black',
					fontSize: FontScale * 9,
				}}
				>
				댓글 {data.commentCount}
				</Text>
			</View>
		</TouchableOpacity>
  	);
}

const styles = StyleSheet.create({
    hashtag: {
      backgroundColor: '#645CAA',
      color: 'white',
      borderRadius: 30,
      padding: 3,
      paddingHorizontal: 10,
      margin: 3,
      marginTop: 10,
      fontSize: FontScale * 8,
    },
    hashtagFirst: {
      color: '#645CAA',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#645CAA',
    },
});
