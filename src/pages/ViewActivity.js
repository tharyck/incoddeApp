import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import api from '../services/api';

export default function ViewActivity ({navigation}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();

    useEffect(() => {
        async function loadActivity() {
            const response = await api.get(`/activities/${match.params.id}`);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setStatus(response.data.status);
        }

    async function handleCancel() {
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Text style={styles.textTitle}>Nova Atividade</Text>

            <Text style={styles.text}>Titulo: {title}</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Informe o Titulo da Atividade"
                placeholderTextColor="#999"
                value={title}
                onChangeText={setTitle}
                style={styles.input}/>
            <Text style={styles.text}>Descrição:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Informe a Descrição da Atividade"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                style={styles.input}/>
            <Text style={styles.text}>Status:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Selecione o status da atividade"
                placeholderTextColor="#999"
                value={status}
                onChangeText={setStatus}
                style={styles.input}/>

            <Button rounded success onPress={handleCreate} style={styles.button}>
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
        marginTop: 10,

    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
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
