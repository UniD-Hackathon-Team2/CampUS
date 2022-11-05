import React, {useState} from "react";
import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export default function Search({navigation}){
    const [keyword, setKeyword] = useState("");
    const [selectedList, setSelectedList] = useState("Campaign");
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
                returnKeyType="done"
                onChangeText={(keyword)=>setKeyword(keyword)}
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
                                fontSize: 20,
                                color: "purple"
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
                                color: "purple"
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
        </Container>
    );
}