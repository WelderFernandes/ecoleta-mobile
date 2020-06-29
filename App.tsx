import React from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Ubuntu_700Bold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
      </>
    );
  }
}