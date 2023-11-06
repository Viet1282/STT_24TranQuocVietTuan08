import { useNavigation } from '@react-navigation/core';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUsers } from '../apis/user.api';


export default function Login() {
    const navigation = useNavigation();
    const [user,setUser] = useState({email:'',password:''})
    const [error,setError] = useState('')
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchUsers().then(setData)
    },[])
    console.log(data);
    console.log(user);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
            <TextInput onChangeText={(text) => setUser({...user,email:text})} value={user.email} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='email' autoFocus={true}></TextInput>
            <TextInput onChangeText={(text)=>setUser({...user,password:text})} value={user.password} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='password'></TextInput>
            <TouchableOpacity style={{}} onPress={()=>{
                navigation.navigate('Signup');
            }}>
                <Text style={{color:'blue',fontSize:15}}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:300,height:50,backgroundColor:'blue',borderRadius:15, alignItems:'center',justifyContent:'center'}}
            onPress={()=>{
                for(let d of data){
                    if(d.email === user.email && d.password === user.password){
                        navigation.navigate('DisplayNote',{id:d.id});
                        return;
                    }
                }
                setError('Email or password is wrong')
            }}>
                <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{color:'red',fontSize:15}} >{error}</Text>
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
