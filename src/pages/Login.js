import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform,StyleSheet, TextInput, Image} from 'react-native';
import { Button, Text } from 'native-base';
import { AsyncStorage } from 'react-native';
import api from '../services/api';
import Logo from '../assets/logo-incodde.png';

export default function Login ({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        AsyncStorage.getItem('token').then(token => {
            if(token){
                navigation.navigate('Main')
            }
        })
    }, []);

    async function handleRegisterUser() {
        navigation.navigate('RegisterUser');

    }

    async function handleLogin() {
        const response = await api.post('/login/', {email: email, password: password});
        const { token } = response.data;
        await AsyncStorage.setItem('token', token);
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Image source={Logo}  style={styles.image}/>
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
                secureTextEntry
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

    image: {
        alignItems: 'center',
        marginBottom: 30

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
