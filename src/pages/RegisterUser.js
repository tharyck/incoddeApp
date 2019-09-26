import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
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

            <Text style={styles.textTitle}>Novo Usuario</Text>

            <Text style={styles.text}>Nome:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Informe o nome do Usuario"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
                style={styles.input}/>
            <Text style={styles.text}>Email:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Informe um email valido"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                style={styles.input}/>
            <Text style={styles.text}>Senha:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Informe uma senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                style={styles.input}/>

            <Button rounded success  onPress={handleCreate} style={styles.button}>
                <Text>Criar</Text>
            </Button>
            <Button rounded danger onPress={handleCancel} style={styles.button}>
                <Text>Cancelar</Text>
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

    textTitle: {
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
