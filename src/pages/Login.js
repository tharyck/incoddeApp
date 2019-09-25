import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Text, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export default function Login ({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // useEffect(() => {
    //     AsyncStorage.getItem('user').then(user => {
    //         if(user){
    //             navigation.navigate('Main', {user})
    //         }
    //     })
    // }, []);
    async function handleRegisterUser() {
        navigation.navigate('RegisterUser');

    }

    async function handleLogin() {
        const response = await api.post('/login/', {email: email, password: password});
        const { token } = response.data;
        await AsyncStorage.setItem('user', token);
        navigation.navigate('Main', { token });
        
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Text style={styles.text}>Login</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Informe o Email Cadastrado"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}/>
                <TextInput
                    placeholder="Informe a Senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}/>
                <TouchableOpacity onPress={handleLogin} style={styles.login}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegisterUser} style={styles.create}>
                    <Text>Cadastrar</Text>
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

    text: {
        fontWeight: 'bold',
        // color: '#000',
        fontSize: 30
    },

    input: {
        height: 35,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    login: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#228B22',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    create: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#1874CD',
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
