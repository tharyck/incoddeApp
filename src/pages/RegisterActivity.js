import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform,StyleSheet, TextInput} from 'react-native';
import { Button, Text, Form, Icon, Container, Picker, Item} from 'native-base';
import api from '../services/api';

export default function RegisterActivity ({navigation}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState('pendente');
    const user = navigation.getParam('user');

    async function handleCancel() {
        navigation.navigate('Main');
    }

    async function handleCreate() {
        await api.post('/activities/', {title, description, status});
        navigation.navigate('Main');
    }

    async function onValueChange(value: string) {
        setStatus(value);
    }

    return (
        <Container>
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios' }
            style={styles.container}>

            <Text style={styles.textTitle}>Nova Atividade</Text>

            <Text style={styles.text}>Titulo:</Text>
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
            <Form>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="Selecione o Status"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={status}
                        onValueChange={onValueChange.bind(this)}
                    >
                    <Picker.Item label="Pendente" value="pendente" />
                    <Picker.Item label="Fazendo" value="fazendo" />
                    <Picker.Item label="Concluida" value="concluida" />
                </Picker>
                </Item>
            </Form>
        </KeyboardAvoidingView>
            <Button rounded success onPress={handleCreate} style={styles.button}>
                <Text>Criar</Text>
            </Button>
            <Button rounded danger onPress={handleCancel} style={styles.button}>
                <Text>Cancelar</Text>
            </Button>
        </Container>
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
