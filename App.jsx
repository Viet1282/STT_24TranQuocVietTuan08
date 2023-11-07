import { NavigationContainer } from '@react-navigation/native';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DisplayNote from './src/screens/DisplayNotes';
import UpdateNote from './src/screens/UpdateNote';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="DisplayNote" component={DisplayNote} />
                <Stack.Screen name="UpdateNote" component={UpdateNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}