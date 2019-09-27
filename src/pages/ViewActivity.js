import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {Button, Text, Container, Header} from 'native-base';
import api from '../services/api';

export default function ViewActivity ({navigation}, ) {
    const activity = navigation.getParam('activity');

    async function handleCancel() {
            navigation.navigate('Main');

        }

    return (
        <Container>
            <Header />
            <Container>
                <Text style={styles.textTitle}>{activity.title}</Text>
                <Text style={styles.text}>Descrição: {activity.description}</Text>
                <Text style={styles.text}>Status: {activity.status}</Text>
            </Container>

            <Button rounded info onPress={handleCancel} style={styles.button}>
                <Text>Voltar</Text>
            </Button>
        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    text: {
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center'

    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignSelf: 'center'
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
