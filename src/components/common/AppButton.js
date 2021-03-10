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
            <TouchableOpacity onPress={props.updateState} style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.myState}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default AppButton

const styles = StyleSheet.create({
    
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: 200,
        padding: 20,
        backgroundColor: "#1e365c",
        marginLeft: "10%",
        marginTop: "10%",
        marginBottom: 40,
        elevation: 8,
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }
})