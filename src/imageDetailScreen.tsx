/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

type ImageDetailProps = {
    route: any;
};

const ImageDetailScreen: React.FC<ImageDetailProps> = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'lightblue'} barStyle="dark-content" />
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.expandedTitle}>Selected {item.title}</Text>
            <SharedElement id={`item.${item.id}.image`}>
                <Image source={item.image} style={styles.expandedImage} />
            </SharedElement>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        paddingHorizontal: 20,
    },
    expandedImage: {
        height: '60%',
        width: 'auto',
        padding: '50%',
        borderRadius: 5,

    },
    expandedTitle: {
        fontSize: 24,
        marginVertical: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        padding: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: 'black',
    },
});

export default ImageDetailScreen;
