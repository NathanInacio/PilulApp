import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaDeLogin from "./screens/LoginScreen";
import TelaHome from "./screens/HomeScreen";
import TelaMed from "./screens/MedScreen";
import TelaRegistro from "./screens/RegistroScreen";
import IdosoScreen from "./screens/IdosoScreen";
import AdicionarMedScreen from "./screens/AdicionarMedScreen";
import EditarIdosoScreen from "./screens/EditarIdosoScreen";
import EditarMedScreen from "./screens/EditarMedScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Entrar" component={TelaDeLogin} />
                <Stack.Screen name="Registro" component={TelaRegistro} />
                <Stack.Screen name="Inicio" component={TelaHome} />
                <Stack.Screen name="Idoso" component={IdosoScreen} />
                <Stack.Screen name="EditarIdoso" component={EditarIdosoScreen} />
                <Stack.Screen name="Med" component={TelaMed} /> 
                <Stack.Screen name="AdicionarMed" component={AdicionarMedScreen} />
                <Stack.Screen name="EditarMed" component={EditarMedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

