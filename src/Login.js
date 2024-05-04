import { View } from "react-native";
import { useState } from "react";
import Header from "./components/SignIn/Header";
import InputField from "./components/SignIn/InputField";
import SignInButton from "./components/SignIn/SignInButton";
import SignInBreaker from "./components/SignIn/SignInBreaker";
import WindowsLogin from "./components/SignIn/WindowsLogin";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleUser(type, newValue) {
    setUser({
      ...user,
      [type]: newValue,
    });
  }

  return (
    <View>
      <Header />
      <InputField handler={handleUser} />
      <SignInButton />
      <SignInBreaker />
      <WindowsLogin />
    </View>
  );
};

export default Login;
