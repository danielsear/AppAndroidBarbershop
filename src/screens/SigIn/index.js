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

export default () => {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordlField] = useState("");

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

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SingMessageButton>
        <SingMessageButtonText>
          Ainda não possui uma conta?
        </SingMessageButtonText>
        <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
      </SingMessageButton>
    </Container>
  );
};
