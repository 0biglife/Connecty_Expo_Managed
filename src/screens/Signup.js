import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	padding: 50px 20px;
`;

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const refEmail = useRef(null);
	const refPassword = useRef(null);
	const refPasswordConfirm = useRef(null);

	const _handleSignupBtnPress = () => {
		console.log('Signup');
	};

	return (
		<KeyboardAwareScrollView extraScrollHeight={20}>
			<Container>
				<Image showButton={true} />
				<Input
					label="Name"
					placeholder="Name"
					returnKeyType="next"
					value={name}
					onChangeText={setName}
					onSubmitEditing={() => refEmail.current.focus()}
				/>
				<Input
					ref={refEmail}
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
					returnKeyType="next"
					value={password}
					onChangeText={setPassword}
					isPassword={true}
					onSubmitEditing={() => refPasswordConfirm.current.focus()}
				/>
				<Input
					ref={refPasswordConfirm}
					label="Password Confirm"
					placeholder="PasswordConfirm"
					returnKeyType="done"
					value={passwordConfirm}
					onChangeText={setPasswordConfirm}
					isPassword={true}
					onSubmitEditing={_handleSignupBtnPress}
				/>
				<Button title="Sign up" onPress={_handleSignupBtnPress} />
			</Container>
		</KeyboardAwareScrollView>
	);
};

export default Signup;
