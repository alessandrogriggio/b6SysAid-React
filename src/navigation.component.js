import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from './home.component';
import ElencoScreen from './elenco.component';
import DettaglioScreen from './dettaglio.component';
import SoluzioniScreen from './elencoSoluzioni.component';
import EditSoluzioneScreen from './editSoluzione.component';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Elenco' component={ElencoScreen}/>
    <Screen name='Dettaglio' component={DettaglioScreen}/>
    <Screen name='Soluzioni' component={SoluzioniScreen}/>
    <Screen name='EditSoluzione' component={EditSoluzioneScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);