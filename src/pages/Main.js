import React from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView, View} from 'react-native';

export default function Main({navigation}) {

    async function handleActivity() {
        navigation.navigate('RegisterActivity');

    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.email}>Atividades: </Text>

                <TouchableOpacity onPress={handleActivity} style={styles.button}>
                    <Text>Cadastrar Atividade</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
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

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#228B22',
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
