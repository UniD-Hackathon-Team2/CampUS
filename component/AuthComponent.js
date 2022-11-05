import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

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

export default function AuthComponent(data) {
    console.log(data.image)
  	return (
		<TouchableOpacity
			style={{
				height: 100,
                backgroundColor: "lightgray"
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
                    source= {data.image}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
                <View>
                    <Text>{data.title}</Text>
                    <Text>{data.campaign}</Text>
                </View>
            </View>
		</TouchableOpacity>
  	);
}


