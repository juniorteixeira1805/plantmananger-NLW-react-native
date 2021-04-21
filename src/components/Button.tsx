import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
        <TouchableOpacity style={styles.button} activeOpacity={0.4} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
    },
    buttonText:{
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading,

    }
})