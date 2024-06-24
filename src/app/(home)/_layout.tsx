import { Link, Navigator, Slot } from "expo-router";
import { View, Text, StyleSheet, Pressable, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "product",
};

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 24,
    color: "#E7E9E6",
    fontWeight: "bold",
    paddingHorizontal: 24,
  },
});
