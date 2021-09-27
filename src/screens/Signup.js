import React from 'react';
import styled from 'styled-components/native';
import Button from 'react-native';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
/* background-color: ${({ theme }) => theme.background}; */
`;

const StyledText = styled.Text`
font-size: 30px;
color: #111111;
`;

const Signin = ({ navigation }) => {
    return (
        <Container>
            <StyledText>Signup </StyledText>
            <Button title="back" onPress={() => navigation.navigate('Signin')} />
        </Container>
    );
};

export default Signup;