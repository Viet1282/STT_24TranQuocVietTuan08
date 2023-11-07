import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect} from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchNotes } from '../apis/notes.api';
import { useFocusEffect } from '@react-navigation/native';

export default function DisplayNote(route) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [note, setNote] = useState({ title: '', content: '' })
    const id = route.route.params?.id;
    
    // useFocusEffect(
    //     React.useCallback(() => {
    //         fetchNotes(id).then(setData)
    //     }, [])
    // )
    
    useEffect(() => {
        fetchNotes(id).then(setData)
    }, [])

    function handleAddNote() {
        const currentDate = new Date();
        note.createdAt = currentDate;
        fetch(`https://6541275ff0b8287df1fded95.mockapi.io/api/v1/user/${id}/notes/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(note)
        }).then(res => {
            if (res.ok) {
                fetchNotes(id).then(setData)
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
        }).catch(error => {
            // handle error
        })
        setNote({ title: '', content: '' })
    }
    function handleDelete(noteid) {
        fetch(`https://6541275ff0b8287df1fded95.mockapi.io/api/v1/user/${id}/notes/${noteid}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                fetchNotes(id).then(setData)
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with deleted task
        }).catch(error => {
            // handle error
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Note List</Text>


            <ScrollView style={{ width: '90%' }}>
                {data.slice().reverse().map(item => {
                    return (
                        <TouchableOpacity style={styles.OneNote} 
                        onPress={()=>{
                            // navigation.navigate('UpdateNote',item)
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'UpdateNote', params: { item: item }  }],
                              });    
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ width: '55%', fontSize: 20, fontWeight: '700' }}>{item.title}</Text>
                                <Text style={{ width: '40%', fontSize: 15, fontWeight: 'normal' }} >{item.createdAt}</Text>
                                <TouchableOpacity key={item.id} style={{ width: 30, height: 30 }} onPress={() => handleDelete(item.id)}>
                                    <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 30 }}></Image>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 18 }}>{item.content}</Text>
                        </TouchableOpacity>
                    );
                })}
                <View style={{ height: 100 }}></View>
            </ScrollView>

            <SafeAreaView style={styles.addNote}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <TextInput value={note.title} onChangeText={(text) => setNote({ ...note, title: text })} style={{ fontSize: 17, height: 50, width: '25%', border: 'solid 2px black', padding: 10 }} placeholder='Tieu de'></TextInput>

                    <TextInput value={note.content} onChangeText={(text) => setNote({ ...note, content: text })} style={{ fontSize: 17, height: 50, width: '60%', border: 'solid 2px black', padding: 10 }} placeholder='Nhap du lieu'></TextInput>
                    <TouchableOpacity style={{ width: 40, height: 40 }} onPress={handleAddNote}>
                        <Image source={require('../../assets/success.png')} style={{ width: 40, height: 40 }}></Image>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        gap: 10
    },
    OneNote: {
        width: '100%',
        height: 'auto',
        border: 'solid 3px black',
        borderRadius: 15,
        padding: 10,
        marginTop: 5,
    },
    addNote: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'white'
    }
});
