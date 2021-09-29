import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ButtonContainer = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.imgBackground};
	position: absolute;
	bottom: 0;
	right: 0;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
	name: 'photo-camera',
	size: 22,
	color: theme.imgBtnIcon,
}))``;

const PhotoButton = ({ onPress }) => {
	return (
		<ButtonContainer onPresss={onPress}>
			<ButtonIcon />
		</ButtonContainer>
	);
};

const Container = styled.View`
	margin-bottom: 30px;
`;

const ProfileImage = styled.Image`
	background-color: ${({ theme }) => theme.imgBackground};
	width: 100px;
	height: 100px;
	border-radius: 50px;
`;

const Image = ({ url, showButton }) => {
	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const {
					status,
				} = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					Alert.alert;
					'Photo Permission', 'Please turn on the camera permission';
				}
			}
		})();
	}, []);

	return (
		<Container>
			<ProfileImage source={{ url: url }} />
			{showButton && <PhotoButton />}
		</Container>
	);
};

Image.defaultProps = {
	url:
		'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg',
};

Image.propTypes = {
	url: PropTypes.string,
	showButton: PropTypes.bool,
};

export default Image;
