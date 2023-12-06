/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ImageFeedScreen from './src/imageFeedScreen';
import ImageDetailScreen from './src/imageDetailScreen';
import TwitterLoginScreen from './src/login';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TwitterLogin">
        <Stack.Screen name="TwitterLogin"
          options={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          component={TwitterLoginScreen} />
        <Stack.Screen name="ImageFeed"
          options={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          component={ImageFeedScreen} />
        <Stack.Screen name="ImageDetail"
          options={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          component={ImageDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
