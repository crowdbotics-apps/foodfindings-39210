import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#E45700',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={{}}><Pressable onPress={() => {
          navigation.navigate("productListing");
        }}><ImageBackground style={styles.OQGhXUhT} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></Pressable></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  OQGhXUhT: {
    width: "100%",
    height: 445
  }
});
export default Untitled2;