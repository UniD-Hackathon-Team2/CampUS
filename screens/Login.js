import React, {useState} from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { logUserIn, loguserIn } from "../apollo";
import { ActivityIndicator, Alert, View, TouchableOpacity, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

const LOGIN_MUTATION = gql`
	mutation login($userId: String!, $userPassword: String!) {
		login(userId: $userId, userPassword: $userPassword) {
			ok
			token
			error
		}
	}
`;

export default function Login({navigation}){
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const onCompleted = async(data) => {
        const {
            login: {ok, token, error}
        } = data;
        if(ok){
            setLoading(false);
            await logUserIn(token);
            navigation.navigate("MainNav");
        }
        else{
            setLoading(false);
        }
    }

    const [loginMutation] = useMutation(
        LOGIN_MUTATION, {
            onCompleted,
        }
    )

    const UserLogin = async() => {
        await loginMutation({
            variables: {
                userId: userId,
                userPassword: userPassword
            }
        })
    }

    return(
        <Container>
            <KeyboardAwareScrollView
                style={{width: "100%", alignSelf: "center"}}
                behavior="position"
            >
                <View style={{
                    width: "100%",
                    alignItems:"center"
                }}>
                    <View style={{marginTop: 100, width: "60%"}}>
                        <Text style={{marginBottom: 10}}>아이디</Text>
                        <TextInput
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: "100%",
                                height: 30,
                            }}
                            value={userId}
                            placeholder="아이디"
                            onChangeText={(userId)=>setUserId(userId)}
                        />
                    </View>
                    <View style={{marginTop: 20, width: "60%"}}>
                        <Text>비밀번호</Text>
                        <TextInput
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: "100%",
                                height: 30,
                            }}
                            value={userPassword}
                            placeholder="비밀번호"
                            secureTextEntry
                            keyboardType="ascii-capable"
                            returnKeyType="done"
                            onChangeText={(userPassword)=>setUserPassword(userPassword)}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={async()=> {
                        setLoading(true)
                        await UserLogin()
                    }}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "30%",
                        alignSelf: "center",
                        marginTop: 30,
                        borderColor: "black",
                        borderWidth: 1
                    }}
                >
                    {
                        !loading ? (
                            <Text>로그인</Text>
                        ) : (
                            <ActivityIndicator size="small" color="gray"/>
                        )
                    }
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </Container>
    );
}