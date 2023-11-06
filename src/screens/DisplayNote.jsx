import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function DisplayNote() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Note List</Text>


            <ScrollView style={{ width: '90%' }}>
                {Array(5).fill(0).map(item => {
                    return (
                        <TouchableOpacity style={styles.OneNote}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ width: '55%', fontSize: 20, fontWeight: '700' }}>AAAAAAAAAAAA</Text>
                                <Text style={{ width: '40%', fontSize: 15, fontWeight: 'normal' }}>12/45/45 15:15:45</Text>
                            </View>
                            <Text style={{ fontSize: 18 }}>s   sjdhs dh hfskfks ds hks dh fsfkjdhs sssssssssssssssssssssssssssxxxxxxxxxxxxxxxx</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            <SafeAreaView style={styles.addNote}>
                
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <TextInput style={{fontSize:17, height: 50, width: '25%', border: 'solid 2px black', padding: 10 }} placeholder='Tieu de'></TextInput>

                    <TextInput style={{fontSize:17, height: 50, width: '60%', border: 'solid 2px black', padding: 10 }} placeholder='Nhap du lieu'></TextInput>
                    <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => {

                    }}>
                        <Image source={require('../../assets/send-message.png')} style={{ width: 40, height: 40 }}></Image>
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
