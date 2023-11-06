import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login() {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
            <TextInput onChangeText={setEmail} value={email} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='email'></TextInput>
            <TextInput onChangeText={setPassword} value={setPassword} style={{ height: 50, width: 300, border: 'solid 2px black', padding: 10 }} placeholder='password'></TextInput>
            <TouchableOpacity style={{}} onPress={()=>{
                navigation.navigate('Signup');
            }}>
                <Text style={{color:'blue',fontSize:15}}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:300,height:50,backgroundColor:'blue',borderRadius:15, alignItems:'center',justifyContent:'center'}}
            onPress={()=>{
                navigation.navigate('DisplayNote')
            }}>
                <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>LOGIN</Text>
            </TouchableOpacity>
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
