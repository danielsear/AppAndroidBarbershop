import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/search.svg";
import MyLocationIcon from "../../assets/my_location.svg";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";
import { Platform, RefreshControl } from "react-native"; //precisamso saber se o app esta rodando em android ou ios
import Api from "../../Api";
import BarberItem from "../../components/BarberItem";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
} from "./styles";

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState();
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  //função de pegar a lista dos barbeiros
  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let long = null;
    if (coords) {
      lat = coords.latitude;
      long = coords.longitude;
    }

    let res = await Api.getBarbers(lat, long, locationText);
    //o locationtext vai pegar o nome digitado e procurar no google as coordenadas
    if (res.error == "") {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else {
      alert("error:" + res.error);
    }
    setLoading(false);
  };

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS == "ios"
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
    if (result == "granted") {
      // se foi enter, ele deu acesso

      setLoading(true);
      setLocationText("");
      setList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords); //salvou as informações de lat, long etc
        getBarbers(); //entao pega os barbeiros daquela localização
      });
    }
  };

  useEffect(() => {
    getBarbers();
  });

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  };

  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
            value={locationText}
            onChangeText={(text) => setLocationText(text)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#ffffff" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" fill="#ffffff" />}

        <ListArea>
          {list.map((item, k) => {
            <BarberItem key={k} data={item} />;
          })}
        </ListArea>
      </Scroller>
    </Container>
  );
};

// conceito de refreshControl, de arrastar pra baixo e atualizar o campo
//numberOfLines={2}  duas linhas
