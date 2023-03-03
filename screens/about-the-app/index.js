import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = params => {
  const [ImageSource, setImageSource] = useState();
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        <Image style={styles.JrJCYiRf} source={require("./images.png")} />
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      </View>
      <View style={styles.textContainer}>
        <View><Text style={styles.h1}>Recipe Name</Text></View>
        <View style={styles.xRkJweVS}><View style={styles.MhhhXZCC}>
          <Text style={styles.MqLCMTKd}>Prep Time: </Text> <Text>100</Text>
        </View><View style={styles.uXCtqgPR}> <Text style={styles.SvrVsbuB}>Cook Time: </Text><Text>100</Text></View></View>
        <Text style={styles.text}>I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 30,
    color: "#E45700"
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10
  },
  JrJCYiRf: {
    width: "100%",
    height: 150
  },
  xRkJweVS: {
    width: 318,
    height: 2,
    flexDirection: "row",
    flex: "1"
  },
  MhhhXZCC: {
    flex: 1
  },
  uXCtqgPR: {
    flex: 1
  },
  MqLCMTKd: {
    fontSize: 15,
    fontWeight: "bold"
  },
  SvrVsbuB: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default AboutTheAppScreen;