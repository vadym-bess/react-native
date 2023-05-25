import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export const LogOutButton = ({ navigation }) => {
  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
    <View style={{ marginRight: 16 }}>
      <SvgXml xml={svgString} width={25} height={25} />
    </View>
  </TouchableOpacity>;
};
