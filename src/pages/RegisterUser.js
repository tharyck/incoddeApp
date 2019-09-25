import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Text, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export default function RegisterUser ({navigation}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleCancel() {
        navigation.navigate('Login');
    }

    async function handleCreate() {
        const response = await api.post('/users/', {name, email, password});
        navigation.navigate('Login');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Text style={styles.titleText}>Novo Usuario</Text>

            <Text style={styles.text}>Nome:</Text>
            <TextInput
                placeholder="Informe o nome do Usuario"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
                style={styles.input}/>
            <Text style={styles.text}>Email:</Text>
            <TextInput
                placeholder="Informe um email valido"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                style={styles.input}/>
            <Text style={styles.text}>Senha:</Text>
            <TextInput
                placeholder="Informe uma senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
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
        backgroundColor: '#228B22',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cancel: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#CD0000',
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
