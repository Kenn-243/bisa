import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SignInButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0961F5",
    width: 320,
    height: 43,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 16,
    flexDirection: "column",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default SignInButton;
