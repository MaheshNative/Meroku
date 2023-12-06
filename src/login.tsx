/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


type Props = {
    navigation: any;
};

const TwitterLoginScreen: React.FC<Props> = ({ navigation }) => {
    const handleTwitterLogin = () => {
        navigation.navigate('ImageFeed');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Image
                source={require('./Assets/x.jpeg')}
                style={{ height: '30%', width: '40%', marginVertical: 40 }}></Image>
            <TouchableOpacity onPress={handleTwitterLogin} style={styles.twitterButton}>
                <Text style={styles.buttonText}>Login using Twitter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: '30%',
        backgroundColor: '#e4f2f5',
    },
    header: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    twitterButton: {
        backgroundColor: '#1DA1F2',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TwitterLoginScreen;
