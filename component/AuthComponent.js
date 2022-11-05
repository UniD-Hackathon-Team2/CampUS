import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { colors } from '../colors';

const data = {
    title: '오늘도 내가 먼저 인사 ^^',
    writer: '인사왕',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.6(월)",
    campaign: "안녕하세요 내가 먼저",
    image: "https://cdn-icons-png.flaticon.com/512/2717/2717377.png",
    viewCount: 1023,
    commentCount: 2,
}

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Layout = { Width: Width, Height: Height };
const FontScale = 1.3;

export default function AuthComponent(data) {
  	return (
		<TouchableOpacity
			style={{
				height: 100,
				width: Layout.Width,
                backgroundColor: "#F7F7FB",
                justifyContent: "center",
                borderBottomColor: "black",
                borderBottomWidth: 1
			}}
		>
			<View
                style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Image 
                    source = {{uri: data.image}}
                    style={{
                        width: 70,
                        height: 70,
                        marginTop: 10,
                        marginLeft: 15,
                        borderRadius: 15
                    }}
                />
                <View style={{marginLeft: 15, width: "70%"}}>
                    <Text style={{fontWeight: "900", marginTop: 5}}>{data.title}</Text>
                    <Text>{data.campaign}</Text>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                        <Text style={{fontSize: 12}}>닉네임: {data.writer}</Text>
                        <View>
                            <Text style={{fontSize: 12}}>{data.date}</Text>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Text style={{fontSize: 12, marginRight: 5}}>조회 {data.viewCount}</Text>
                                <Text style={{fontSize: 12}}>댓글 {data.commentCount}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
		</TouchableOpacity>
  	);
}


