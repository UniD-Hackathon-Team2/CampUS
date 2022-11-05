import React from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import CameraIcon from "../assets/icon/camera_purple_24dp.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export default function WriteCampaignPost({navigation}) {
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <Container>
            <ScrollView
                style={{
                    width: "85%",
                    marginVertical: 40
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{color: "purple"}}>제목</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10,
                    }}
                    placeholder={`제목을 입력하세요.`}
                    placeholderTextColor='#C5C8CE'
                />
                <Text style={{color: "purple", marginTop: 20}}>마감일</Text>
                <View
                    style={{
                        width: '100%',
                        flexDirection: "row",
                        height: 30,
                        marginTop: 10
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: "purple",
                                borderBottomWidth: 1,
                            }}
                            keyboardType='numeric'
                            placeholder={`년도`}
                            placeholderTextColor='#C5C8CE'
                        />
                        <Text style={{flex:1, marginStart: 5, marginTop: 7}}>년</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: "purple",
                                borderBottomWidth: 1,
                            }}
                            placeholder={`월`}
                            placeholderTextColor='#C5C8CE'
                            keyboardType='numeric'
                        />
                        <Text style={{flex: 1, marginStart: 5, marginTop: 7}}>월</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: "purple",
                                borderBottomWidth: 1
                            }}
                            placeholder={`일`}
                            placeholderTextColor='#C5C8CE'
                            keyboardType='numeric'
                        />
                        <Text style={{flex: 1, marginStart: 5, marginTop: 7}}>일</Text>
                    </View>
                </View>
                <Text style={{color: "purple", marginTop: 20}}>지역 설정</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    placeholder={`지역을 입력하세요.`}
                    placeholderTextColor='#C5C8CE'
                />
                <Text style={{color: "purple", marginTop: 20}}>내용</Text>
                <TextInput
                    style={{
                        width: "100%",
                        height: 250,
                        backgroundColor: 'rgba(100, 92, 170, 0.1)',
                        marginTop: 10,
                        padding: 10,
                        borderRadius: 10,
                        textAlignVertical: 'top',
                    }}
                    placeholder="내용을 입력하세요."
                    multiline={true}
                />
                <Text style={{color: "purple", marginTop: 20}}>사진 추가</Text>
                <TouchableOpacity 
                    style={{
                        marginRight: 20,
                        marginTop: 10
                    }}
                >
                    <WithLocalSvg
                        asset={CameraIcon}
                        width={80}
                        height={80}
                    />
                </TouchableOpacity>
                <Text style={{color: "purple", marginTop: 20}}>해시태그</Text>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    placeholder={`#해시태그`}
                    placeholderTextColor='#C5C8CE'
                />
                <View 
                    style={{
                        width: '100%',
                        flexDirection: "row",
                        marginTop: 20
                    }}
                >
                <BouncyCheckbox
                    size={25}
                    fillColor="#645CAA"
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "#645CAA" }}
                />
                <Text style={{color: "purple", marginTop: 3}}>모금여부</Text>
                </View>
                <TextInput
                    style={{
                        borderBottomColor: "purple",
                        borderBottomWidth: 1,
                        width: "100%",
                        height: 30,
                        marginTop: 10
                    }}
                    placeholder={`목표 금액`}
                    placeholderTextColor='#C5C8CE'
                />
            </ScrollView>
        </Container>
        </TouchableWithoutFeedback>
    )
}