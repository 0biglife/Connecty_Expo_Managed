import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Image, Input } from '../components';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import {
// 	GoogleSignin,
// 	GoogleSigninButton,
// 	statusCodes,
// } from '@react-native-community/google-signin';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 0 20px;
    padding-top: ${({ insets: { top } }) => top}px;
    padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png';

const Signin = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const refPassword = useRef(null);

    const _handleSigninBtnPress = () => {
        console.log('Signin');
    }; 

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={20}
            contentContainerStyle={{ flex: 1 }}
        >
				<Container insets={insets}>
					<Image url={LOGO} />
					{/* <Input
						label="Eamil"
						placeholder="Email"
						returnKeyType="next"
						value={email}
						onChangeText={setEmail}
						onSubmitEditing={() => refPassword.current.focus()}
					/>
					<Input
						ref={refPassword}
						label="Password"
						placeholder="Password"
						returnKeyType="done"
						value={password}
						onChangeText={setPassword}
						isPassword={true}
						onSubmitEditing={_handleSigninBtnPress}
					/>
					<Button title="Sign in" onPress={_handleSigninBtnPress} /> */}
					<Button
						title="or sign up"
						onPress={() => navigation.navigate("Signup")}
						containerStyle={{ marginTop: 0, backgroundColor: "transparent" }}
						textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
					/>
				</Container>
			</KeyboardAwareScrollView>
		);
};

export default Signin;