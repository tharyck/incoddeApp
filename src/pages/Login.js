import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export default function Login ({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', {user})
            }
        })
    }, []);

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

            <Text style={styles.textLogin}>Login</Text>
                <Text style={styles.text}>Email:</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Informe o Email Cadastrado"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}/>
                <Text style={styles.text}>Senha:</Text>
                <TextInput
                    placeholder="Informe a Senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}/>

                <Button rounded success style={styles.button} onPress={handleLogin}>
                    <Text>Entrar</Text>
                </Button>
                <Button rounded info style={styles.button} onPress={handleRegisterUser}>
                    <Text>Cadastrar</Text>
                </Button>

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
        alignSelf: 'flex-start'
    },

    textLogin: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
    },

    input: {
        height: 35,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
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
