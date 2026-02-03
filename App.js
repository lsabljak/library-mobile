import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import { useFonts, PlaywriteNZ_400Regular } from '@expo-google-fonts/playwrite-nz';

import BookListScreen from './screens/BookListScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import BookFormScreen from './screens/BookFormScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'PlaywriteNZ': PlaywriteNZ_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff2d9' }}>
        <ActivityIndicator size="large" color="#805c45" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: '#5c473c' },
          headerTintColor: '#fff2d9',
          headerTitleStyle: { 
            fontFamily: 'PlaywriteNZ', 
            fontSize: 18 
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="BookList" component={BookListScreen} options={{ title: 'Lista knjiga' }} />
        <Stack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Detalji Knjige' }} />
        <Stack.Screen name="BookForm" component={BookFormScreen} options={{ title: 'Unos Knjige' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}