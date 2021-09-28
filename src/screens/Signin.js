import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Image, Input } from '../components';

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

    return (
        <Container insets={insets}>
            <Image url={LOGO} />
            <Input
                label="Eamil"
                placeholder="Email"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label="Password"
                placeholder="Password"
                returnKeyType="done"
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Sign up"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title="or sign up"
                onPress={() => navigation.navigate('Signup')}
                containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
                textStyle={{color: theme.btnTextLink, fontSize: 18}}
            />
        </Container>
    );
};

export default Signin;