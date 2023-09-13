import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'teal',
  },
};

function DrawerComponent() {
  return (
    <Drawer.Navigator
    initialRouteName='Screen3'
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#5dbf06',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontFamily: 'DMSans-Bold',
          fontSize: 15,
        },
        drawerStyle:{
          width:"40%"
        }
      }}>
      <Drawer.Screen
        name={'Screen1'}
        component={Screen1}
        options={{
          title: 'Screen1',
          headerTitleStyle: {fontFamily: 'DMSans-Bold'},
          headerTitleAlign: 'center',
          headerShown: false,
          headerStyle: {backgroundColor: '#F5F5F5'},
        }}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name={'Screen2'}
        component={Screen2}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name={'Screen3'}
        component={Screen3}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name={'Login'}
            component={Login}
            options={{
              headerShown: false,
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name={'SignUp'}
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Root"
            component={DrawerComponent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
