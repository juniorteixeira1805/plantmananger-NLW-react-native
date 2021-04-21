import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts'

import { Entypo } from'@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation()

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie{'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image source={wateringImg} style={style.image} resizeMode="contain"/>

                <Text style={style.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={style.button} activeOpacity={0.4}>
                        <Entypo name="chevron-thin-right" style={style.buttonIcon} onPress={handleStart}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize:28,
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize:18,
        fontFamily: fonts.text,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 20,
        color: colors.white
    }
})