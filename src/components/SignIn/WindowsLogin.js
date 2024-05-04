import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import config from "../../../config";

const signInWithMicrosoft = async () => {
  try {
    const authResponse = await AuthSession.startAsync({
      authUrl: `${
        config.serviceConfiguration.authorizationEndpoint
      }?response_type=code&client_id=${config.clientId}&redirect_uri=${
        config.redirectUri
      }&scope=${config.scopes.join(" ")}`,
    });

    if (authResponse.type === "success") {
      console.log("Authentication successful:", authResponse);
    } else {
      console.warn("Authentication not successful:", authResponse);
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

const WindowsLogin = () => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity
        onPress={() => signInWithMicrosoft()}
        style={styles.touchLayout}
      >
        <Image
          style={styles.windowsImage}
          source={require("../../../assets/windows.png")}
        />
        <Text style={styles.signInWithMicrosoftText}>
          Sign In with Microsoft
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  touchLayout: {
    width: 320,
    height: 43,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: "#C6C6C6",
    borderWidth: 1,
  },

  windowsImage: {
    width: 33,
    height: 33,
  },

  signInWithMicrosoftText: {
    color: "#999090",
    paddingLeft: 20,
  },
});

export default WindowsLogin;

//38bf1e93-d041-40b6-abfe-2254c781847a
//811df0f2-2396-4666-a4ca-5f450313845b
