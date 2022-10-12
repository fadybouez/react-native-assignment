import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles.jsx";
export const Details = ({ navigation }) => {
  return (
    <View>
      <Text>Details PAGE</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Back To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Text> Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ImgPicker");
        }}
      >
        <Text> Image</Text>
      </TouchableOpacity>
    </View>
  );
};
