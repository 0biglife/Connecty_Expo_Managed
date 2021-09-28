import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size: 30px;
color: #111111;
`;

const Signup = ({ navigation }) => {
    return (
        <Container>
            <StyledText>Signup</StyledText>
            <Button
                title="Signup"
                onPress={() => navigation.navigate('Signin')}
            />
        </Container>
    );
};

export default Signup;