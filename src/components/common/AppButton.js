import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const AppButton = (props) => {
    const button = styles.button

    if(props.width) {
        button = {...button,...{width: props.width}}
    }

    if(props.height) {
        button = {...button,...{height: props.height}}
    }
    return (
        <View>
            <TouchableOpacity onPress={props.updateState}>
                <Text style={styles.button}>
                    {props.myState}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default AppButton

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#1e365c',
        paddingHorizontal: 22,
        paddingVertical: 15,
        alignItems: 'center',
        color: 'white'
    }
})