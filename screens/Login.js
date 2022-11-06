import React, {useState} from "react";
import { gql, useMutation,useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { logUserIn } from "../apollo";
import { ActivityIndicator, Alert, View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../colors";
import { isLoggedInVar, userLocationVar, whereVar, unreadVar, expoTokenVar } from "../apollo";
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

    const isLoggedIn = useReactiveVar(isLoggedInVar);

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
                    <Image 
                        source={require("../assets/image/logo.png")} 
                        style={{
                            marginTop: "50%",
                            width: 210,
                            height: 82
                        }}
                    />
                    <View style={{marginTop: 60, width: "60%"}}>
                        <TextInput
                            style={{
                                borderBottomColor: "purple",
                                borderBottomWidth: 1,
                                width: "100%",
                                height: 30,
                            }}
                            value={userId}
                            placeholder="이메일을 입력하세요."
                            onChangeText={(userId)=>setUserId(userId)}
                        />
                    </View>
                    <View style={{marginTop: 20, width: "60%"}}>
                        <TextInput
                            style={{
                                borderBottomColor: "purple",
                                borderBottomWidth: 1,
                                width: "100%",
                                height: 30,
                            }}
                            value={userPassword}
                            placeholder="비밀번호를 입력하세요."
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
                        isLoggedInVar(true)
                        await UserLogin()
                    }}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        height: 40,
                        alignSelf: "center",
                        marginTop: 30,
                        backgroundColor: colors.purple,
                        borderRadius: 20
                    }}
                >
                    {
                        !loading ? (
                            <Text style={{color: "white"}}>로그인</Text>
                        ) : (
                            <ActivityIndicator size="small" color="gray"/>
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        height: 40,
                        alignSelf: "center",
                        marginTop: 20,
                        backgroundColor: colors.lightPurple,
                        borderRadius: 20
                    }}  
                    onPress={()=>navigation.navigate("CreateAccount")}  
                >
                    <Text style={{color: "white"}}>회원가입</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </Container>
    );
}