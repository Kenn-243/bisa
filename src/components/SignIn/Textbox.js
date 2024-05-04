import { StyleSheet, Text, TextInput, View } from "react-native";

const Textbox = ({ text, secure, type, userChange, value }) => {
  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.textInput}>{text}</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={secure}
          userChange={(input) => userChange(type, input)}
          placeholder={value}
          placeholderTextColor={"#909091"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textInput: {
    fontSize: 12,
    marginBottom: 5,
    paddingTop: 7,
  },

  inputBox: {
    backgroundColor: "#e8e9ed",
    width: 320,
    height: 43,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Textbox;
