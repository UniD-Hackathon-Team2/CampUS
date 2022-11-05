import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { WithLocalSvg } from "react-native-svg"

import PersonIcon from "../assets/icon/person_black_24dp.svg";
import SearchIcon from "../assets/icon/search_black_24dp.svg";
import { colors } from "../colors";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

const DATA = [{
    title: '일회용품 줄이기 같이 참여해주세요',
    writer: '환경 지키미',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'offline',
    deadline: null,
    hashtag: ['#환경 보호', '#서울', '#일회용품'],
    content: `일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...일회용품 사용을 줄이는 데 적극 동참합시다! ...`,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9reSShWPUtrTb5URWhbrvzfhjK9mCMj9MugKxy7BoSwnv6Hbk_scmM5zjm3f0203O5Pc&usqp=CAU",
    viewCount: 1023,
    commentCount: 2,
  },{
    title: '내 그릇 사용 캠페인',
    writer: '그릇 지키미',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#환경 보호', '#내 그릇', '#경기',"#집밥"],
    content: `음식 포장주문 시에는 "내 그릇"을 사용해보아요 ...음식 포장주문 시에는 "내 그릇"을 사용해보아요 ...음식 포장주문 시에는 "내 그릇"을 사용해보아요 ...음식 포장주문 시에는 "내 그릇"을 사용해보아요 ...`,
    image: "https://mediahub.seoul.go.kr/uploads/mediahub/2021/06/kXNfXEGBICWYhTYflcuyzRtdrulfjYDM.png",
    viewCount: 1023,
    commentCount: 2,
  },{
    title: '다시 입다',
    writer: '패셔니스타',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#다시 입기', '#나눠 입기', '#옷'],
    content: `나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인!...`,
    image: "https://www.innovationpark.kr/wp-content/uploads/2020/07/%ED%95%B4%EC%8B%9C%ED%83%9C%EA%B7%B8-%EC%BA%A0%ED%8E%98%EC%9D%B8-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    viewCount: 1023,
    commentCount: 2,
  },{
    title: 'CUP A TEE',
    writer: '머그컵',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#지구의 날', '#스타벅스', '#서울 그린 트러스트'],
    content: `다회용 컵 사용 인증하고 선물 받자! ...다회용 컵 사용 인증하고 선물 받자! ...다회용 컵 사용 인증하고 선물 받자! ...다회용 컵 사용 인증하고 선물 받자!...`,
    image: "https://mediahub.seoul.go.kr/uploads/mediahub/2021/04/pEMzfCNbXjPIYqcfBJERoYJfyzLjeEsQ.png",
    viewCount: 1023,
    commentCount: 2,
  },{
    title: '풀무원 줍깅 캠페인',
    writer: '풀무원',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'online',
    deadline: null,
    hashtag: ['#깨끗한 지구', '#줍깅', '#건강한 지구'],
    content: `나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인! ...나를 위해 지구를 위해 풀무원 줍깅 캠페인!...`,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.pulmuone.co.kr%2Fpulmuone%2Fnewsroom%2FviewNewsroom.do%3Fid%3D2568&psig=AOvVaw3wCaWZ-FuMd0BakK1esqvX&ust=1667760385742000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMi0pNzZl_sCFQAAAAAdAAAAABAH",
    viewCount: 1023,
    commentCount: 2,
  }];
  

export default function Home({navigation}){
    const [refreshing, setRefreshing] = useState(false);
    const [selectedList, setSelectedList] = useState("Campaign");
    const refresh = async() => {
        setRefreshing(true);
        //await refetch();
        setRefreshing(false);
    }
    const renderCampaign = ({item: post}) => {
        return(
            <View>
                <Text>캠페인 게시판</Text>
            </View>
        );
    }
    const renderAuth = ({item: post}) => {
        return(
            <View>
                <Text>인증 게시판</Text>
            </View>
        );
    }

    const HeaderRight = () => {
        return(
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <TouchableOpacity 
                    style={{
                        marginRight: 5,
                        marginTop: 5
                    }}
                    onPress={()=>navigation.navigate("Search")}
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
                    onPress={()=>navigation.navigate("MyInfo")}
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

    useEffect(()=> {
        navigation.setOptions({
            headerRight: HeaderRight,
            headerBackTitle: ()=> null
        })
    })

    return(
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
                        <TouchableOpacity onPress={()=>setSelectedList("Campaign")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20,
                                color: colors.purple
                            }}>캠페인</Text>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity onPress={()=>setSelectedList("Campaign")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20
                            }}>캠페인</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    selectedList == "Auth" ? (
                        <TouchableOpacity onPress={()=>setSelectedList("Auth")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                fontSize: 20,
                                color: colors.purple
                            }}>인증</Text>
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity onPress={()=>setSelectedList("Auth")}>
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
                    /*<FlatList
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderCampaign}
                    />*/
                    <Text>캠페인</Text>
                ): (
                    /*<FlatList
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderAuth}
                    />*/
                    <Text>인증</Text>
                )
            }
            {
                selectedList=="Campaign" ? (
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
                        onPress={()=>navigation.navigate("WriteCampaignPost")}
                    >
                        <Text style={{color: "white", fontSize: 40}}>+</Text>
                    </TouchableOpacity>
                ):(
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
                        onPress={()=>navigation.navigate("WriteAuthPost")}
                    >
                        <Text style={{color: "white", fontSize: 40}}>+</Text>
                    </TouchableOpacity>
                )
            }
            
        </Container>
    );
}