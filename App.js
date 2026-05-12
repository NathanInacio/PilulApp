import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaDeLogin from "./screens/LoginScreen";
import TelaHome from "./screens/HomeScreen";
import TelaMed from "./screens/MedScreen";
import TelaRegistro from "./screens/RegistroScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Entrar" component={TelaDeLogin} />
                <Stack.Screen name="Registro" component={TelaRegistro} />
                <Stack.Screen name="Inicio" component={TelaHome} />
                <Stack.Screen name="Med" component={TelaMed} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
