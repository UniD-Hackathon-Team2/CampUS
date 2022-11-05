import React, {useState} from "react";
import styled from "styled-components";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export default function CreateAccount({navigation}){
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [config, setConfig] = useState("");
    return(
        <Container>
            <View style={{width: "85%"}}>
                <Text style={{color: "purple", fontSize: 30, marginTop: 30}}>회원 가입</Text>
                <Text style={{color: "purple", fontSize: 20, marginTop: 40}}>아이디</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    value={userId}
                    placeholder="이메일을 입력하세요."
                    onChangeText={(userId)=>setUserId(userId)}
                />
                <Text style={{color: "purple", fontSize: 20, marginTop: 40}}>비밀번호</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    value={userPassword}
                    secureTextEntry
                    keyboardType="ascii-capable"
                    placeholder="숫자, 영문을 포함하여 8자리 이상"
                    onChangeText={(userId)=>setUserId(userId)}
                />
                <Text style={{color: "purple", fontSize: 20, marginTop: 40}}>비밀번호 확인</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    value={config}
                    secureTextEntry
                    keyboardType="ascii-capable"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChangeText={(userId)=>setUserId(userId)}
                />
                <TouchableOpacity 
                    style={{
                        width: "60%",
                        height: 40,
                        backgroundColor: "purple",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        marginTop: 40
                    }}
                >
                    <Text style={{color: "white"}}>회원가입 하기</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}