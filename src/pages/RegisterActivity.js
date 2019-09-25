import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Text, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export default function RegisterActivity ({navigation}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();
    //TODO: Colocar id do usuario
    const [user, setUser] = useState();

    async function handleCancel() {
        navigation.navigate('Main');
    }

    async function handleCreate() {
        const response = await api.post('/activities/', {title, description, status});
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Text style={styles.titleText}>Nova Atividade</Text>

            <Text style={styles.text}>Titulo:</Text>
            <TextInput
                placeholder="Informe o Titulo da Atividade"
                placeholderTextColor="#999"
                value={title}
                onChangeText={setTitle}
                style={styles.input}/>
            <Text style={styles.text}>Descrição:</Text>
            <TextInput
                placeholder="Informe a Descrição da Atividade"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                style={styles.input}/>
            <Text style={styles.text}>Status:</Text>
            <TextInput
                placeholder="Selecione o status da atividade"
                placeholderTextColor="#999"
                value={status}
                onChangeText={setStatus}
                style={styles.input}/>
            <TouchableOpacity onPress={handleCreate} style={styles.create}>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.cancel}>
                <Text>Cancelar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    titleText: {
        fontWeight: 'bold',
        // color: '#000',
        fontSize: 30,
        marginBottom: 50,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 15,
    //    TODO: Alinhar a esquerda
    },

    input: {
        height: 35,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginBottom: 10,
        paddingHorizontal: 15,
    },

    create: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#00CD66',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cancel: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#CD3333',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
