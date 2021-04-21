import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import colors from '../styles/colors';

import {Button} from '../components/Button'
import fonts from '../styles/fonts';

export function Confirmation() {

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    😄
                </Text>

                <Text style={style.title}>
                    Prontinho
                </Text>
                
                <Text style={style.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <View style={style.footer}>
                    <Button title="Começar"/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    title: {
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        textAlign: 'center',
        fontSize:17,
        fontFamily: fonts.text,
        paddingVertical: 10,
        color: colors.heading,
    },
    emoji: {
        fontSize:78,
    },
    footer: {
        width: '100%',
        marginTop: 50,
        paddingHorizontal: 40
    }
})