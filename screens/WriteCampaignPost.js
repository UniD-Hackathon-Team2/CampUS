import React, {useEffect} from "react";
import styled from "styled-components";
import {gql, useMutation} from "@apollo/client";
import { ActivityIndicator, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { WithLocalSvg } from "react-native-svg";
import CameraIcon from "../assets/icon/camera_purple_24dp.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

const UPLOAD_CAMPAIGN = gql`
    mutation uploadCampaignPost($title: String, $text: String, $location: String, $maxnum: Int, $hashtag: [String], $minnum: Int, $isfund: Boolean, $views: Int){
        uploadCampaignPost(title: $title, text: $text, location: $location, maxnum: $maxnum, hashtag: $hashtag, minnum: $minnum, isfund: $isfund, views: $views){
            id
        }
    }
`;

export default function WriteCampaignPost({ navigation }) {
    const { register, handleSubmit, setValue } = useForm();
    const updateUploadCampaign = (cache, result) => {
        const {
            data: {uploadCampaignPost}
        } = result;
        if(uploadCampaignPost.id) {
            navigation.navigate("Home");
        }
    }
    const [uploadCampaignMutation, {loading}] = useMutation(UPLOAD_CAMPAIGN, {
        update: updateUploadCampaign,
    });
    const onValid = async (data) => {
        console.log(data);
        const date = data.year.toString()+"/"+data.month.toString()+"/"+data.day.toString();
        console.log(date);
        let hashtag;
        if(data.hashtags.split(" ")) hashtag = data.hashtags.split(" ")
        else hashtag = data.hashtags;
        console.log(hashtag);
        await uploadCampaignMutation({
            variables: {
                title: data.title,
                text: data.text,
                location: data.location,
                hashtag: hashtag
            }
        })
        
    }
    const HeaderRight = () => (
		<TouchableOpacity onPress={handleSubmit(onValid)}>
			<Text style={{ marginRight: 15, fontSize: 17 }}>완료</Text>
		</TouchableOpacity>
	);
	const HeaderRightLoading = () => (
		<ActivityIndicator
			size="small"
			color={"gray"}
			style={{ marginRight: 15 }}
		/>
	);
    useEffect(()=> {
        navigation.setOptions({
            headerRight: loading ? HeaderRightLoading : HeaderRight
        })
    })
    return (
        <KeyboardAwareScrollView>
            <Container>
                <ScrollView
                    style={{
                        width: '85%',
                        marginVertical: 40,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                <Text style={{ color: 'purple' }}>제목</Text>
                <TextInput
                    style={{
                        borderBottomColor: 'purple',
                        borderBottomWidth: 1,
                        width: '100%',
                        height: 30,
                        marginTop: 10,
                    }}
                    placeholder={`제목을 입력하세요.`}
                    placeholderTextColor="#C5C8CE"
                    onChangeText={(text)=> setValue("title", text)}
                />
                <Text style={{ color: 'purple', marginTop: 20 }}>마감일</Text>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        height: 30,
                        marginTop: 10,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: 'purple',
                                borderBottomWidth: 1,
                            }}
                            keyboardType="numeric"
                            placeholder={`년도`}
                            placeholderTextColor="#C5C8CE"
                            onChangeText={(text)=> setValue("year", text)}
                        />
                        <Text style={{ flex: 1, marginStart: 5, marginTop: 7 }}>년</Text>
                    </View>
                    <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: 'purple',
                                borderBottomWidth: 1,
                            }}
                            placeholder={`월`}
                            placeholderTextColor="#C5C8CE"
                            keyboardType="numeric"
                            onChangeText={(text)=> setValue("month", text)}
                        />
                        <Text style={{ flex: 1, marginStart: 5, marginTop: 7 }}>월</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                borderBottomColor: 'purple',
                                borderBottomWidth: 1,
                            }}
                            placeholder={`일`}
                            placeholderTextColor="#C5C8CE"
                            keyboardType="numeric"
                            onChangeText={(text)=>setValue("day", text)}
                        />
                        <Text style={{ flex: 1, marginStart: 5, marginTop: 7 }}>일</Text>
                    </View>
                </View>
                <Text style={{ color: 'purple', marginTop: 20 }}>지역 설정</Text>
                <TextInput
                    style={{
                    borderBottomColor: 'purple',
                    borderBottomWidth: 1,
                    width: '100%',
                    height: 30,
                    marginTop: 10,
                    }}
                    placeholder={`지역을 입력하세요.`}
                    placeholderTextColor="#C5C8CE"
                    onChangeText={(text)=> setValue("location", text)}
                />
                <Text style={{ color: 'purple', marginTop: 20 }}>내용</Text>
                <TextInput
                    style={{
                    width: '100%',
                    height: 250,
                    backgroundColor: 'rgba(100, 92, 170, 0.1)',
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 10,
                    textAlignVertical: 'top',
                    }}
                    placeholder="내용을 입력하세요."
                    multiline={true}
                    onChangeText={(text)=> setValue("text", text)}
                />
                <Text style={{ color: 'purple', marginTop: 20 }}>사진 추가</Text>
                <TouchableOpacity
                    style={{
                    marginRight: 20,
                    marginTop: 10,
                    }}
                >
                    <WithLocalSvg asset={CameraIcon} width={80} height={80} />
                </TouchableOpacity>
                <Text style={{ color: 'purple', marginTop: 20 }}>해시태그</Text>
                <TextInput
                    style={{
                    borderBottomColor: 'purple',
                    borderBottomWidth: 1,
                    width: '100%',
                    height: 30,
                    marginTop: 10,
                    }}
                    placeholder={`#해시태그`}
                    placeholderTextColor="#C5C8CE"
                    onChangeText={(text)=>setValue("hashtags", text)}
                />
                <View
                    style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 20,
                    }}
                >
                    <BouncyCheckbox
                        size={25}
                        fillColor="#645CAA"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: '#645CAA' }}
                    />
                    <Text style={{ color: 'purple', marginTop: 3 }}>모금여부</Text>
                </View>
                <TextInput
                    style={{
                    borderBottomColor: 'purple',
                    borderBottomWidth: 1,
                    width: '100%',
                    height: 30,
                    marginTop: 10,
                    }}
                    placeholder={`목표 금액`}
                    placeholderTextColor="#C5C8CE"
                />
                </ScrollView>
            </Container>
        </KeyboardAwareScrollView>
  );
}
