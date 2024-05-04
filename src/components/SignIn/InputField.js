import { StyleSheet, View } from "react-native";
import Textbox from "./Textbox.js";

const InputField = ({ handler }) => {
  return (
    <View style={styles.layout}>
      <Textbox
        text="Email"
        secure={false}
        type="email"
        userChange={handler}
        value="example@binus.ac.id"
      />
      <Textbox
        text="Password"
        secure={true}
        type="password"
        userChange={handler}
        value="********************"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 35,
  },
});

export default InputField;
