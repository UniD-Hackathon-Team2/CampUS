import React from "react";
import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export default function WirteCampainPost({navigation}) {
    return(
        <Container>
            <View
                style={{
                    width: "85%",
                }}
            >
                <Text style={{color: "purple", marginTop: 20}}>제목</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                />
                <Text style={{color: "purple", marginTop: 20}}>마감일</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                />
                <Text style={{color: "purple", marginTop: 20}}>지역 설정</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                />
                <Text style={{color: "purple", marginTop: 20}}>내용</Text>
            </View>
        </Container>
    )
}