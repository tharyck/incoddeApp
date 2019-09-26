import React, { useState, useEffect,Component } from 'react';
import {Container, Header, Content, List, ListItem, Text, Button, Left, Right, Icon, Fab} from 'native-base';
import {StyleSheet} from 'react-native';
import api from '../services/api';

export default function Main({navigation}) {
    const id = navigation.getParam('user');
    const [activities, setActivities] = useState([]);

    console.log(id);
    useEffect(() => {
        async function loadActivities() {
            const response = await api.get('/activities/', {
                headers: {
                    activity: id,
                }
            });

            setActivities(response.data);
        }

         loadActivities();
    }, [id]);
    
    async function handleActivity() {
        navigation.navigate('RegisterActivity');

    }

    return (
            <Container>
                <Header />
                <Content>
                    {activities.map(activity => (
                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>{activity.title}</Text>
                            </Left>
                            <Right>
                                <Button transparent>
                                <Icon name="arrow-forward" />
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                        ))}
                </Content>
                <Fab
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={handleActivity}>
                    <Icon name="add" />
                </Fab>
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
        fontWeight: 'bold'
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
