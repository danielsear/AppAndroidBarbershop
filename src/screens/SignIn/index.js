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
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordlField] = useState("");

  const handleSingClick = async () => {
    if (emailField != "" && passwordField != "") {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        alert("entrou");
      } else {
        alert("Email e/ou senha inválidos!");
      }
    } else {
      alert("Preencha os campos email e senha!");
    }
  };

  const handleMessageButtonClick = () => {
    //mandar o usuario pra outra tela sem a possibilidade dele voltar
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <BarbeLogo width="100%" height="160" />

      <InputArea>
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
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageButtonText>
          Ainda não possui uma conta?
        </SingMessageButtonText>
        <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
      </SingMessageButton>
    </Container>
  );
};
