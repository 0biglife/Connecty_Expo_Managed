import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.background};
padding: 0 20px;
`;

const StyledText = styled.Text`
font-size: 30px;
color: #111111;
`;

const Signin = ({ navigation }) => {
    return (
        <Container>
            <StyledText>Signin</StyledText>
            <Button
                title="Signin"
                onPress={() => navigation.navigate('Signup')}
            />
        </Container>
    );
};

export default Signin;