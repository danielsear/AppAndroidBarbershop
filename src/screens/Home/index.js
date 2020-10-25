import React from "react";
import SearchIcon from "../../assets/search.svg";
import MyLocationIcon from "../../assets/my_location.svg";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from "./styles";

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate("Search")}>
            <SearchIcon width="26" height="26" fill="#ffffff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#ffffff"
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#ffffff" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};

// conceito de refreshControl, de arrastar pra baixo e atualizar o campo
//numberOfLines={2}  duas linhas
