import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";





export default function MyHeader() {


    return (
        <View style={styles.container}>
            <View style={styles.container_text}>
                <Text style={styles.paragraph}>
                    Teach'rs Favoris
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2892F2',
        height: 200,


    },
    paragraph: {
        color: 'white',
        fontSize: 25,
        paddingTop: 100,
        paddingLeft: 25

    }
});