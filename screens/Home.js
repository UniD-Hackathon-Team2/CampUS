import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg"
import PersonIcon from "../assets/icon/person_black_24dp.svg";
import SearchIcon from "../assets/icon/search_black_24dp.svg";
import { colors } from "../colors";
import CampaignComponent from "../component/CampaignComponent";
import AuthComponent from "../component/AuthComponent";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

const AUTH_DATA = [{
    id: 1,
    title: '캠패인 참여 인증합니다!',
    writer: '환경 지키미',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.5(일)",
    campaign: `일회용품 줄이기 같이 참여해주세요`,
    image: "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    viewCount: 15,
    commentCount: 0,
},
{   
    id: 2,
    title: '오늘은 머그컵 사용~',
    writer: '지구야 사랑해',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.5(일)",
    campaign: `지구를 지켜요`,
    image: "http://m.mughome.com/web/product/big/201503/144_shop1_380845.jpg",
    viewCount: 12,
    commentCount: 1,
}, {
    id: 3,
    title: '오운완 인증',
    writer: '오운완',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.5(일)",
    campaign: `지켜주세요 캠페인`,
    image: "http://health.chosun.com/site/data/img_dir/2019/04/30/2019043001203_0.jpg",
    viewCount: 25,
    commentCount: 2,
}, {
    id: 4,
    title: '몸은 떨어져 있어도 마음만은 같이~',
    writer: '코로나시러',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.6(월)",
    campaign: "따로 또 같이",
    image: "https://guide.worksmobile.com/kr/images/tips-img-07@2x.png",
    viewCount: 18,
    commentCount: 0,
},
{
    id: 5,
    title: '오늘도 내가 먼저 인사 ^^',
    writer: '인사왕',
    part: 30,
    minPart: 60,
    maxPart: 100,
    date: "2022.11.6(월)",
    campaign: "안녕하세요 내가 먼저",
    image: "https://cdn-icons-png.flaticon.com/512/2717/2717377.png",
    viewCount: 21,
    commentCount: 4,
}]



const DATA = [{
    id : 1,
    title: '내 건강 내가 지켜',
    writer: '러닝 조아',
    part: 10,
    minPart: 100,
    maxPart: 500,
    type: 'offline',
    deadline: null,
    content: `웹킵스가 건강한 대학생활을 함께해요  ...`,
    hashtag: ['#환경 보호', '#내 그릇', '#경기', "#집밥"],
    image: "https://img.hankyung.com/photo/202205/0D.29999573.1.png",
    viewCount: 10,
    commentCount: 2,
}, {
    id : 2,
    title: '내 그릇 사용 캠페인',
    writer: '그릇 지키미',
    part: 8,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#환경 보호', '#내 그릇', '#경기', "#집밥"],
    content: `음식 포장주문 시에는 "내 그릇"을 사용해보아요 ...`,
    image: "https://mediahub.seoul.go.kr/uploads/mediahub/2021/06/kXNfXEGBICWYhTYflcuyzRtdrulfjYDM.png",
    viewCount: 20,
    commentCount: 0,
}, {
    id : 3,
    title: '다시 입다',
    writer: '패셔니스타',
    part: 10,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#다시 입기', '#나눠 입기', '#옷'],
    content: `나를 위해 지구를 위해 풀무원 줍깅 캠페인!...`,
    image: "https://www.innovationpark.kr/wp-content/uploads/2020/07/%ED%95%B4%EC%8B%9C%ED%83%9C%EA%B7%B8-%EC%BA%A0%ED%8E%98%EC%9D%B8-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    viewCount: 11,
    commentCount: 1,
}, {
    id : 4,
    title: 'CUP A TEE',
    writer: '머그컵',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#지구의 날', '#스타벅스', '#서울 그린 트러스트'],
    content: `다회용 컵 사용 인증하고 선물 받자!...`,
    image: "https://mediahub.seoul.go.kr/uploads/mediahub/2021/04/pEMzfCNbXjPIYqcfBJERoYJfyzLjeEsQ.png",
    viewCount: 45,
    commentCount: 5,
}, {
    id : 5,
    title: '풀무원 줍깅 캠페인',
    writer: '풀무원',
    part: 6,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#깨끗한 지구', '#줍깅', '#건강한 지구'],
    content: `나를 위해 지구를 위해 풀무원 줍깅 캠페인!...`,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.pulmuone.co.kr%2Fpulmuone%2Fnewsroom%2FviewNewsroom.do%3Fid%3D2568&psig=AOvVaw3wCaWZ-FuMd0BakK1esqvX&ust=1667760385742000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMi0pNzZl_sCFQAAAAAdAAAAABAH",
    viewCount: 31,
    commentCount: 4,
}];



export default function Home({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const [selectedList, setSelectedList] = useState("Campaign");
    const refresh = async () => {
        setRefreshing(true);
        //await refetch();
        setRefreshing(false);
    }

    const renderCampaign = ({ item: data }) => {
        return <CampaignComponent{...data} />
       
    }
    const renderAuth = ({ item: data }) => {
        return <AuthComponent{...data} />
    }

    const HeaderRight = () => {
        return (
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <TouchableOpacity
                    style={{
                        marginRight: 5,
                        marginTop: 5
                    }}
                    onPress={() => navigation.navigate("Search")}
                >
                    <WithLocalSvg
                        asset={SearchIcon}
                        width={30}
                        height={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        marginTop: 5
                    }}
                    onPress={() => navigation.navigate("MyInfo")}
                >
                    <WithLocalSvg
                        asset={PersonIcon}
                        width={30}
                        height={30}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: HeaderRight,
            headerBackTitle: () => null
        })
    })

    return (
        <Container>
            <View style={{
                width: "60%",
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {
                    selectedList == "Campaign" ? (
                        <TouchableOpacity onPress={() => setSelectedList("Campaign")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20,
                                color: colors.purple
                            }}>캠페인</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setSelectedList("Campaign")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20
                            }}>캠페인</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    selectedList == "Auth" ? (
                        <TouchableOpacity onPress={() => setSelectedList("Auth")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20,
                                color: colors.purple
                            }}>인증</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setSelectedList("Auth")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20
                            }}>인증</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            {
                selectedList == "Campaign" ? (
                    <FlatList
                        style={{marginTop : 10}}
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        data = {DATA}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={renderCampaign}
                    />

                ) : (
                    <FlatList
                    style={{marginTop : 10}}
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        data = {AUTH_DATA}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={renderAuth}
                    />
                )
            }
            {
                selectedList == "Campaign" ? (
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 20,
                            bottom: 50,
                            width: 60,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100,
                            backgroundColor: colors.purple
                        }}
                        onPress={() => navigation.navigate("WriteCampaignPost")}
                    >
                        <Text style={{ color: "white", fontSize: 40 }}>+</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 20,
                            bottom: 50,
                            width: 60,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 100,
                            backgroundColor: colors.purple
                        }}
                        onPress={() => navigation.navigate("WriteAuthPost")}
                    >
                        <Text style={{ color: "white", fontSize: 40 }}>+</Text>
                    </TouchableOpacity>
                )
            }

        </Container>
    );
}