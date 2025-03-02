import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
const icons = {
  google: require("@/assets/icons/google.png"),
};
const images = {
  onboarding: require("@/assets/images/onboarding.png"),
};

const SignIn = () => {

  const {refetch, loading, isLoggedIn} = useGlobalContext();


  const handleLogin = async () => {
    const response = await login();
    if (response) {
      // Alert.alert("Success", "You have successfully logged in");
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image
          source={images.onboarding}
          className="w-full h-4/6 mt-2 md:mt-12"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center font-bold text-black-200 font-rubik uppercase">
            Welcome to ReState
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300 text-center mt-2">
              Your Ideal Home
            </Text>
            {/* Login to Google Button */}
            
          </Text>
            <Text className="text-lg font-rubik text-black-200 text-center mt-10 md:mt-16">
              Login to ReState with Google
            </Text>
            
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.google}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
