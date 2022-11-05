import React from "react";
import styled from "styled-components";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg"
import ArrowIcon from "../assets/icon/arrow_forward_ios_black_24dp.svg"

const Container = styled.View`
    flex: 1;
    background-color: white;
`;

export default function MyInfo({navigation}){
    return(
        <Container>
            <View style={{width: "85%", alignSelf: "center"}}>
                <View 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >   
                    <Image 
                        source={require("../assets/image/person.png")}
                        style={{
                            height: 50,
                            width: 50,
                            marginTop: 20
                        }}
                    />
                    <Text style={{fontSize: 20, marginTop: 15, marginLeft: 20}}>님</Text>
                </View>
                <Text style={{fontSize: 20, marginTop: 30}}>캠페인</Text>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 30, marginLeft: 5}}>참여한 캠페인</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>작성한 게시글</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 20, marginTop: 30}}>설정</Text>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>환경 설정</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>앱 가이드</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>약관 및 정책</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View   
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}
                >
                    <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>현재 버전</Text>
                    <TouchableOpacity style={{marginTop: 30}}>
                        <WithLocalSvg
                            asset={ArrowIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}