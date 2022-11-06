import React, {useState} from "react";
import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity,FlatList } from "react-native";
import { colors } from "../colors"
import CampaignComponent from "../component/CampaignComponent";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;


const searchDATA = [{
    id: 1,
    title: '일주일 육식 금지 캠페인',
    writer: '채소 조아',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'offline',
    deadline: null,
    content: `일주일간 육식을 하지 않으실 분을 구합니다!`,
    hashtag: ['#비건', '#동물', '#사랑'],
    image: "http://cdn.bosa.co.kr/news/photo/202106/2151829_183759_1152.jpg",
    viewCount: 1023,
    commentCount: 2,
}, {

    id: 2,
    title: '채식하는날 캠페인',
    writer: '대덕이',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'offline',
    deadline: null,
    content: `1주일에 1일씩 채식을 하실 분 구합니다.`,
    hashtag: ['#비건', '#식습관', '#건강'],
    image: "http://www.dailycc.net/news/photo/202101/630096_511050_1302.jpg",
    viewCount: 1023,
    commentCount: 2,

}, {

    id: 3,
    title: '비건 한달 캠페인',
    writer: '러쉬',
    part: 30,
    minPart: 60,
    maxPart: 100,
    type: 'offline',
    deadline: null,
    content: `1주일에 1일씩 채식을 하실 분 구합니다.`,
    hashtag: ['#비건', '#채식', '#환경'],
    image: "https://www.vegilog.com/wp-content/uploads/2022/01/20220118-news02.jpg",
    viewCount: 1023,
    commentCount: 2,

}]

export default function Search({navigation}){
    const [refreshing, setRefreshing] = useState(false);
    const refresh = async () => {
        setRefreshing(true);
        //await refetch();
        setRefreshing(false);
    }
    const renderCampaign = ({ item: data }) => {
        return <CampaignComponent{...data} />
    }
    const [selectedList, setSelectedList] = useState("Campaign");
    const [userInput, setUserInput] = useState("none");
    const search = () => {
        setUserInput("notnone");
    }
    const [keyword, setKeyword] = useState("");
   
    return(
        <Container>
            <TextInput
                value={keyword}
                style={{
                    width: "80%",
                    backgroundColor: "lightgray",
                    fontSize: 18,
                    height: 30,
                    marginTop: 20,
                    borderRadius: 20,
                    paddingHorizontal: 10
                }}
                placeholder="검색어를 입력해주세요."
                placeholderTextColor={"gray"}
                returnKeyType="done"
                onChangeText={(keyword)=>setKeyword(keyword)}
                onSubmitEditing={(search)}
            />
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "60%",
                    justifyContent: "space-between",
                    marginTop: 20
                }}
            >   
                {
                    selectedList == "Campaign" ? (
                        <TouchableOpacity onPress={()=>setSelectedList("Campaign")}>
                            <Text style={{
                                fontFamily: 'Jalnan',
                                color: colors.purple,
                                fontSize: 20,
                            }}>캠페인</Text>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity onPress={()=>setSelectedList("Campaign")}>
                        <Text style={{
                            fontFamily: 'Jalnan',
                            fontSize: 20,
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
                userInput == "none" ? (
                   <View></View>
                ) : (
                    <FlatList
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        data={searchDATA}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={renderCampaign}
                    />
                )
            }

        </Container>
    );
}