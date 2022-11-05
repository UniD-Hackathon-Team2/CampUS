import React, {useState} from "react";
import styled from "styled-components";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../colors";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export default function CreateAccount({navigation}){
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userGender, setUserGender] = React.useState("man");
    const [config, setConfig] = useState("");
    return(
        <Container>
            <KeyboardAwareScrollView
                style={{width: "85%", alignSelf: "center"}}
                behavior="position"
            >
            <View style={{width: "100%"}}>
                <Text style={{color: colors.darkPurple, fontSize: 30, marginTop: 30, fontWeight: 'bold'}}>회원 가입</Text>
                <Text style={{color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>아이디</Text>
                <TextInput
                    style={{
                        borderBottomColor: colors.darkPurple,
                        borderBottomWidth: 2,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    value={userId}
                    placeholder="이메일을 입력하세요."
                    onChangeText={(userId)=>setUserId(userId)}
                />
                <Text style={{color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>비밀번호</Text>
                <TextInput
                    style={{
                        borderBottomColor: colors.darkPurple,
                        borderBottomWidth: 2,
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
                <Text style={{color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>비밀번호 확인</Text>
                <TextInput
                    style={{
                        borderBottomColor: colors.darkPurple,
                        borderBottomWidth: 2,
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
                <View
                    style={{
                        width: '100%',
                        flexDirection: "row"
                    }}
                >
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{width: '100%', color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>나이</Text>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: "row",
                                marginTop: 10
                            }}
                        >
                            <TextInput
                                style={{
                                    flex: 1,
                                    borderBottomColor: colors.darkPurple,
                                    borderBottomWidth: 2,
                                    marginTop: 10,
                                    paddingBottom: 5
                                }}
                                placeholder={`나이`}
                                placeholderTextColor='#C5C8CE'
                                keyboardType='numeric'
                            />
                            <Text style={{flex: 1, marginStart: 5, marginTop: 12, fontSize: 15}}>세</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{width: '100%', color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>성별</Text>    
                        <RadioButton.Group 
                            style={{
                                marginTop: 10
                            }} 
                            onValueChange={value => setUserGender(value)} value={userGender}>
                            <RadioButton.Item label="남성" value="man" color={colors.darkPurple} />
                            <RadioButton.Item label="여성" value="woman" color={colors.darkPurple} />
                        </RadioButton.Group>
                    </View>
                </View>
                <Text style={{color: colors.darkPurple, fontSize: 18, marginTop: 40, fontWeight: 'bold'}}>관심 지역 설정</Text>
                <TextInput
                    style={{
                        borderBottomColor: colors.darkPurple,
                        borderBottomWidth: 2,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    value={config}
                    secureTextEntry
                    keyboardType="ascii-capable"
                    placeholder="없음"
                />
                <TouchableOpacity 
                    style={{
                        width: "60%",
                        height: 40,
                        backgroundColor: colors.purple,
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
            </KeyboardAwareScrollView>
        </Container>
    )
}