import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    background-color: ${({ theme }) => theme.btnBackground};
    padding: 10px;
    margin: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: ${({theme}) => theme.btnTitle};
`;

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Title>
                    {title}
                </Title>
            </Container>
        </TouchableOpacity>
    );
};

Button.proptype = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default Button;