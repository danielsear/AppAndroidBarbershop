import React, { useState } from "react";
import BarbeLogo from "../../assets/barber.svg";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SingMessageButton,
  SingMessageButtonText,
  SingMessageButtonTextBold,
} from "./styles";
import InputArea from "../../components/SignInput";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg";

import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordlField] = useState("");

  const handleSingClick = () => {};

  const handleMessageButtonClick = () => {
    //mandar o usuario pra outra tela sem a possibilidade dele voltar
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <BarbeLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(text) => setNamelField(text)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(text) => setEmailField(text)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(text) => setPasswordlField(text)}
          password={true}
        />

        <CustomButton onPress={handleSingClick}>
          <CustomButtonText>CADASTRA</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
        <SingMessageButtonTextBold>Faça Login</SingMessageButtonTextBold>
      </SingMessageButton>
    </Container>
  );
};
