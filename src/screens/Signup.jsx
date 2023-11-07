import { useNavigation } from '@react-navigation/core';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUsers } from '../apis/user.api';
import axios, { Axios } from 'axios';

export default function Signup() {
    const navigation = useNavigation();
    const [user, setUser] = useState({ email: '', password: '' })
    const [data, setData] = useState([]);
    const [error, setError] = useState('')


    useEffect(() => {
        fetchUsers().then(setData);
    }, [])
    console.log(data);
    console.log(user);
    const navigator = useNavigation();



    async function handleSignup() {
        for (let d of data) {
            if (d.email === user.email) {
                setError('Email already exists')
                return;
            }
        }
        try {
            const response = await fetch('https://6541275ff0b8287df1fded95.mockapi.io/api/v1/user/', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // Send your data in the request body as JSON
                body: JSON.stringify(user)
            })
            if (response.ok) {
                await response.json();
                navigator.navigate('Login');
            } else {
                setError('Something went wrong')
            }
        }catch(error){
            setError('Something went wrong')
        }
        

    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>SIGNUP</Text>
            <TextInput onChangeText={(text) => setUser({ ...user, email: text })} value={user.email} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='email' autoFocus={true}></TextInput>
            <TextInput onChangeText={(text) => setUser({ ...user, password: text })} value={user.password} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='password'></TextInput>
            <TouchableOpacity style={{}} onPress={() => {
                navigation.navigate('Login');
            }}>
                <Text style={{ color: 'blue', fontSize: 15 }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, height: 50, backgroundColor: 'blue', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}
                onPress={handleSignup}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>SIGNUP</Text>
            </TouchableOpacity>
            <Text style={{ color: 'red', fontSize: 15 }} >{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
});
