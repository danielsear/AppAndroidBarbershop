import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import BarbeLogo from "../../assets/barber.svg";
import AsyncStorage from "@react-native-community/async-storage";
import {useNavigation} from '@react-navigation/native'

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = (async) => {
      const token = await AsyncStorage.getItem('token');
      if(token !== null){
        //validar o toke
      
      }else{
        //manda direto pro login
        navigation.navigate('SigIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarbeLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};


  /*
        Token: código de segurança, uma chave , arma de permição de acesso, exemplo: login e senha etc..
        O JWT consiste em um token criptografado que é gerado pelo back-end no processo de login
         e utilizado pelo front-end em todas requisições subsequentes. Além de validar o acesso
          do usuário, o token ainda consegue guardar algumas informações codificadas como ID do
           usuário para identificação posterior.
        */