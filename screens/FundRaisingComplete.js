import React from 'react';
import styled from 'styled-components';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../colors';
import RightArrow from '../assets/icon/arrow_right_purple.svg';

/*const DATA = {
	title: '일회용품 줄이기 같이 참여해주세요',
	writer: '환경 지키미',
	part: 30,
	minPart: 60,
	maxPart: 100,
	type: 'offline',
	deadline: null,
	hashtag: ['#환경 보호', '#서울', '#일회용품'],
	content: `일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...`,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9reSShWPUtrTb5URWhbrvzfhjK9mCMj9MugKxy7BoSwnv6Hbk_scmM5zjm3f0203O5Pc&usqp=CAU',
	viewCount: 1023,
	commentCount: 2,
	isFundrasing: true,
	goalFundraised: 500000,
	currentFundrasied: 127000,
	createdAt: '2022.11.05 22:01',
};*/

//===========================모금한 금액 50,000원========
const price = 50000;

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = 1.0;
const AndroidBottomBarHeight = Height - Dimensions.get('window').height - StatusBar.currentHeight;
const radius = 30;

const Container = styled.View`
	flex: 1;
	background-color: white;
	align-items: center;
`;

export default function FundRaisingComplete({ route, navigation }) {
	const DATA = route?.params?.data;
	const FundRatio = () => {
		const ratio = (DATA?.currentFundrasied / DATA?.goalFundraised) * 100;
		return ratio;
	};
	const partRatio = () => {
		const ratio = (DATA?.part / DATA?.maxPart) * 100;
		return ratio;
	};
	const progressBar = (amount) => {
		const height = Height * 0.34;
		const ratio = amount / DATA?.goalFundraised;

		return (
			<View style={{ flexDirection: 'column', alignItems: 'center' }}>
				<Text
					style={{
					textAlign: 'center',
					color: colors.purple,
					}}
				>
					{amount}
				</Text>
				<View
					style={{
					height: height,
					backgroundColor: colors.beige,
					width: Width * 0.095,
					justifyContent: 'flex-end',
					}}
				>
					<Text
					style={{
						color: colors.darkPurple,
						fontWeight: 'bold',
						fontSize: FontScale * 12,
						textAlign: 'center',
					}}
					>
					{ratio * 100}%
					</Text>
					<View
					style={{
						height: ratio * height,
						backgroundColor: colors.lightPurple,
						width: Width * 0.095,
					}}
					/>
				</View>
			</View>
		);
	};
	return (
		<Container>
			{/* title */}
			<View
				style={{
					padding: 10,
					paddingVertical: 20,
					width: Width * 0.9,
				}}
			>
				<View
					style={{
						borderBottomColor: colors.beige,
						borderBottomWidth: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingBottom: 10,
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
					{DATA?.title}
					</Text>

					<Text
					style={{
						fontSize: FontScale * 12,
						color: colors.darkGray,
						marginBottom: 3,
					}}
					>
					{DATA?.writer} · {DATA?.type}
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
						{DATA?.createdAt}
					</Text>
					<Text style={{ fontSize: FontScale * 14, color: 'black' }}>
						{DATA?.deadline == null ? '상시 진행' : DATA?.deadline}
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
				</View>
			</View>
			{/* content */}
			<Text
				style={{
				fontWeight: 'bold',
				fontSize: FontScale * 25,
				marginBottom: 10,
				}}
			>
				모금이 완료되었습니다!
			</Text>
			<Text
				style={{
				fontWeight: 'bold',
				fontSize: FontScale * 18,
				color: colors.beige,
				}}
			>
				후원해주셔서 감사합니다
			</Text>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
					borderBottomWidth: 1,
					borderColor: colors.beige,
					width: Width * 0.7,
					paddingHorizontal: 50,
					margin: 60,
				}}
			>
				{progressBar(DATA?.currentFundrasied)}
				<WithLocalSvg asset={RightArrow} />
				{progressBar(DATA?.currentFundrasied + price)}
			</View>

			<TouchableOpacity
				style={{
					width: Width * 0.8,
					height: Height * 0.066,
					backgroundColor: colors.purple,
					alignSelf: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 30,
				}}
				onPress={()=>navigation.goBack()}
			>
				<Text
				style={{
					color: 'white',
					fontSize: FontScale * 18,
					fontWeight: 'bold',
				}}
				>
				캠페인 페이지로 돌아가기
				</Text>
			</TouchableOpacity>
		</Container>
	);
}
