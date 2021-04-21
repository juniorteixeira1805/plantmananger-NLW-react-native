import React, { useState } from 'react';
import { Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


import {Button} from '../components/Button'
import { useNavigation } from '@react-navigation/core';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFlilled] = useState(false);
    const [name, setName] = useState<string>();


    function handleInputBlur(){
        setIsFocused(false);
        setIsFlilled(!!name)
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFlilled(!!value);
        setName(value)
    }

    const navigation = useNavigation()

    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.content}>
                        <View style={style.form}>
                            <Text style={style.emoji}>
                                {
                                isFilled ? '😄' :  '😀'
                                }
                            </Text>
                            <Text style={style.title}>
                                Como podemos{'\n'}
                                chamar você?{'\n'}
                            </Text>
                            <TextInput
                                style={[style.input, (isFocused || isFilled) && {borderColor: 'green'}]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={style.footer}>
                                <Button title="Confirmar" onPress={handleSubmit}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        width: '100%',

    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 54
    },
    emoji: {
        fontSize:44,
        marginBottom: 20
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.heading,
        lineHeight: 36,
    },
    input: {
        height: 40,
        borderBottomWidth: 3,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        marginTop: 15,
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 18
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})