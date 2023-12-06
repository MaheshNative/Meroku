/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

type ImageItem = {
    id: string;
    image: any;
    title: string;
};

type Props = {
    navigation: any;
};

const ImageFeedScreen: React.FC<Props> = ({ navigation }) => {
    const [data, setData] = useState<ImageItem[]>([]);
    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                const mockData: ImageItem[] = [
                    { id: '1', image: require('./Assets/bill.jpg'), title: 'Billgates' },
                    { id: '2', image: require('./Assets/elon.jpg'), title: 'ElonMusk' },
                    { id: '3', image: require('./Assets/elon.jpg'), title: 'ElonMusk' },
                    { id: '4', image: require('./Assets/bill.jpg'), title: 'Billgates' },
                    { id: '5', image: require('./Assets/bill.jpg'), title: 'Billgates' },
                    { id: '6', image: require('./Assets/elon.jpg'), title: 'ElonMusk' },
                    { id: '2', image: require('./Assets/elon.jpg'), title: 'ElonMusk' },
                    { id: '3', image: require('./Assets/bill.jpg'), title: 'Billgates' },
                ];
                setData(mockData);
            }, 1000);
        };

        fetchData();
    }, []);

    const renderHeader = () => {
        return (
            <Text style={styles.header2}>Click on below cards to see the transition</Text>
        );
    };

    const handleImagePress = (item: ImageItem) => {
        navigation.navigate('ImageDetail', { item });
    };

    const renderGridItem = ({ item }: { item: ImageItem }) => {
        const randomHeight = Math.floor(Math.random() * 120) + 100;
        const gridItemStyles = {
            ...styles.gridItem,
            height: randomHeight,
        };

        return (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
                <View style={gridItemStyles}>
                    <Image source={item.image} style={[styles.image, { height: randomHeight }]} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e4f2f5'} barStyle="dark-content" />
            <Text style={styles.header}>Welcome to Meroku!!</Text>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderGridItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4f2f5',
    },
    header: {
        fontSize: 24,
        color: 'black',
        paddingVertical: 10,
        margin: 10,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    header2: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
    },
    flatListContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 16, paddingBottom: 10,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default ImageFeedScreen;
