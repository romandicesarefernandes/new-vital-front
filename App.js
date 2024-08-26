//import { StatusBar } from 'expo-status-bar';
//console.log('App.js');
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { welcome, register} from './screens/index';
import welcome from "./screens/welcome";
import login from "./screens/login";
import register from "./screens/register";
import mainpage from "./screens/providerpage";
import patientpage from "./screens/patientpage";
import questions from "./screens/questionspage";
import SearchFoodPage from "./screens/search_food_page";
import foodinfopage from "./screens/food_info";
import fullnutritionpage from "./screens/full_nutiriton_report";
import conditionQuestions from "./screens/questions-condition";
import Patientgoals from "./screens/patientgoals";
import { LogBox } from 'react-native'; 

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="questions-condition">
        <Stack.Screen
          name="welcome"
          component={welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="register"
          component={register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="mainpage"
          component={mainpage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="questionspage"
          component={questions}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="questions-condition"
          component={conditionQuestions}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="patientpage"
          component={patientpage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="search_food_page"
          component={SearchFoodPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="food_info"
          component={foodinfopage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="full_nutrition_report"
          component={fullnutritionpage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="patientgoals"
          component={Patientgoals}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
