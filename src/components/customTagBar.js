import React, { useContext } from "react";
import styled from "styled-components/native";
import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg";
import TodayIcon from "../assets/today.svg";
import FavoriteIcon from "../assets/favorite.svg";
import AccountIcon from "../assets/account.svg";
import UseContext from "../contexts/UserContex";

const TabArea = styled.View`
    height:60px,
    background-color: #4EADBE;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default (state, navigation) => {
  const { state: user } = useContext(UseContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>
      <TabItem
        style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        onPress={() => goTo("Search")}
      >
        <SearchIcon width="24" height="24" fill="#ffffff" />
      </TabItem>
      <TabItemCenter onPress={() => goTo("Appointments")}>
        <TodayIcon width="32" height="32" fill="#4eadbe" />
      </TabItemCenter>
      <TabItem
        style={{ opacity: state.index === 2 ? 1 : 0.5 }}
        onPress={() => goTo("Favorites")}
      >
        <FavoriteIcon width="24" height="24" fill="#ffffff" />
      </TabItem>
      <TabItem
        style={{ opacity: state.index === 3 ? 1 : 0.5 }}
        onPress={() => goTo("Profile")}
      >
        {user.avatar != "" ? (
          <AvatarIcon
            source={{ uri: user.avatar }}
            style={{ border: state.index === 4 ? "none" : "1px solid #fff" }}
          />
        ) : (
          <AccountIcon
            style={{ opacity: state.index === 4 ? 1 : 0.5 }}
            width="24"
            height="24"
            fill="#ffffff"
          />
        )}
      </TabItem>
    </TabArea>
  );
};

// a propriedade state mostra qual tela estara ativa
//style={{ opacity: state.index === 4 ? 1 : 0.5 }}se o estado da tela4 for igual 0 o opacity=1 caso contrario opacity=0.5
//caso user.avatar existe use o AvatarIcon , do contrario AccountIcon
