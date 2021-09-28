import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Image } from '../components';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 0 20px;
    padding-top: ${({ insets: { top } }) => top}px;
    padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const StyledText = styled.Text`
    font-size: 30px;
    color: #111111;
`;

const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png';

const Signin = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    return (
        <Container insets={insets}>
            <Image url={LOGO} />
            <StyledText>Signin</StyledText>
            <Button title="Sign up" onPress={() => navigation.navigate('Signin')} />
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