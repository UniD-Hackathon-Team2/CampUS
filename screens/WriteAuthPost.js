import React from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import CameraIcon from '../assets/icon/camera_purple_24dp.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

export default function WriteAuthPost({ navigation }) {
  return (
    <Container>
      <KeyboardAwareScrollView
        style={{
          width: '85%',
        }}
      >
        <Text style={{ color: 'purple', marginTop: 20 }}>제목</Text>
        <TextInput
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            width: '100%',
            height: 30,
            marginTop: 10,
          }}
          placeholder="제목을 입력해주세요"
          placeholderTextColor={'gray'}
        />
        <Text style={{ color: 'purple', marginTop: 20 }}>인증 캠페인</Text>
        <TextInput
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            width: '100%',
            height: 30,
            marginTop: 10,
          }}
          placeholder={`인증하고자 하는 입력해주세요.`}
          placeholderTextColor="#C5C8CE"
        />
        <Text style={{ color: 'purple', marginTop: 20 }}>내용</Text>
        <TextInput
          style={{
            width: '100%',
            height: 250,
            backgroundColor: 'rgba(100, 92, 170, 0.1)',
            marginTop: 10,
            borderRadius: 10,
            textAlignVertical: 'top',
            padding: 10,
            paddingTop: 10,
          }}
          placeholder="내용을 입력하세요."
          multiline={true}
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
      </KeyboardAwareScrollView>
    </Container>
  );
}
