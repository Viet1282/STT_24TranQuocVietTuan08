import { useNavigation } from '@react-navigation/core';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUsers } from '../apis/user.api';


export default function Login(route) {
    const navigation = useNavigation();

    const [data, setData] = useState({});
    const note = route.route.params.item;
    const [noteUpdate, setNoteUpdate] = useState({ title: note.title, content: note.content })


    async function handleUpdate() {
        try {
            const response = await fetch(`https://6541275ff0b8287df1fded95.mockapi.io/api/v1/user/${note.userId}/notes/${note.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(noteUpdate)
            });
            if (response.ok) {
                await response.json();
                navigation.navigate('DisplayNote', { id: note.userId });
            } else {
                
            }
        } catch (error) {
            
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
                <TouchableOpacity style={{ height: 50 }} onPress={() => { navigation.navigate('DisplayNote', { id: note.userId }); }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: '800' }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50 }} onPress={handleUpdate}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: '800' }}>Save</Text>
                </TouchableOpacity>
            </View>
            <TextInput onChangeText={(text) => setNoteUpdate({...noteUpdate,title:text})} value={noteUpdate.title} style={{ height: '20%', width: '100%', border: 'solid 2px black', padding: 10, fontSize: 20 }} placeholder='title' autoFocus={true} multiline={4}></TextInput>
            <TextInput onChangeText={(text) => setNoteUpdate({...noteUpdate,content:text})} value={noteUpdate.content} style={{ height: '60%', width: '100%', border: 'solid 2px black', padding: 10, fontSize: 20 }} placeholder='content' multiline={10}></TextInput>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        gap: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
