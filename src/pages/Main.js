import React, { useState, useEffect } from 'react';
import {Container, Header, Content, List, ListItem, Text, Button, Left, Right, Icon, Fab} from 'native-base';
import {StyleSheet} from 'react-native';
import api from '../services/api';

export default function Main({navigation}) {
    const id = navigation.getParam('user');
    // const id = user._id;
    const [activities, setActivities] = useState([]);

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

    async function viewActivity(activity) {
        navigation.navigate('ViewActivity', { activity });
    }

    return (
            <Container>
                <Header />
                <Content>
                    {activities.length == 0 ? <Text style={styles.empty}> Você não Possui Atividades</Text> :
                        (activities.map(activity => (
                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>{activity.title}</Text>
                            </Left>
                            <Right>
                                <Button transparent onPress={() => viewActivity(activity)}>
                                <Icon name="arrow-forward"/>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                        )))}
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

    empty: {
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center'
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
