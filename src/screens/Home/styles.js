import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export default Scroller = styled.ScrollView`
        flex: 1
        padding: 20px;
`;
export default HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export default SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;
export default LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 20px;
  margin-top: 30px;
`;
export default LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
`;
export default LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
,
export default LoadingIcon = styled.ActivityIndicator`
 margin-top: 50px;
`;