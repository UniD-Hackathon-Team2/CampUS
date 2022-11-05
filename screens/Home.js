import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { WithLocalSvg } from "react-native-svg"

import PersonIcon from "../assets/icon/person_black_24dp.svg";
import SearchIcon from "../assets/icon/search_black_24dp.svg";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

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
                <TouchableOpacity onPress={()=>setSelectedList("Campaign")}>
                    <Text style={{
                        fontFamily: 'Jalnan',
                        fontSize: 20
                    }}>캠페인</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectedList("Auth")}>
                    <Text style={{
                        fontFamily: 'Jalnan',
                        fontSize: 20
                    }}>인증</Text>
                </TouchableOpacity>
            </View>
            {
                selectedList == "Campaign" ? (
                    <FlatList
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderCampaign}
                    />
                ): (
                    <FlatList
                        onEndReachedThreshold={0.02}
                        refreshing={refreshing}
                        onRefresh={refresh}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderAuth}
                    />
                )
            }
            
        </Container>
    );
}