import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../src/stacks/MainStack';
// UserContextProvider da ao aplicativo acesso as todas as informações de todas as paginas
import UserContextProvider from '../src/contexts/UserContex';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};
