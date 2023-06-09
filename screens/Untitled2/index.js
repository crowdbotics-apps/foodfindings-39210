import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const handlePress = () => {// Handle press event
  };

  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("productListing");
    }}>
        <Image source={require("./Recipeful(2).png")} style={styles.image} />
      </Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E45700"
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
export default SplashScreen;