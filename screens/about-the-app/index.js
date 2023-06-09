import React from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const defaultValues = {
  title: "Recipe Title",
  prep_time: 10,
  cook_time: 40,
  instructions: "Sed tempor mauris vel orci condimentum blandit.Etiam dolor magna, dignissim eu placerat a, ultricies sit amet sapien. Quisque quis mauris purus. Pellentesque mattis metus et ex consectetur tempus. Suspendisse lacus velit, venenatis id odio eu, posuere condimentum leo. Quisque ante tortor, posuere sit amet elit non, pellentesque venenatis mauris. Donec at arcu non ex blandit hendrerit vel ac nisi. Cras finibus lectus quis nisl euismod volutpat. "
};
export const CustomButton = ({
  title,
  fontSize = 18
}) => {
  const onShare = async () => {
    try {
      console.log("Shared");
    } catch (error) {
      alert(error.message);
    }
  };

  return <Pressable style={[styles.shareButton, {
    fontSize: fontSize
  }]} onPress={onShare}>
      <Icon name="share" size={fontSize} color="white" />
      <Text style={[styles.shareButtonText, {
      fontSize
    }]}>
        {title}
      </Text>
    </Pressable>;
};

const AboutTheRecipe = ({
  route
}) => {
  const {
    item = defaultValues
  } = route.params || {};
  return <SafeAreaView style={styles.container}>
      <ScrollView containerStyle={styles.imgScroller}>
        <View style={styles.stNDJnlx}>
          <ImageBackground style={styles.JrJCYiRf} source={require("./broccoli.jpg")} resizeMode="cover">
            <View>
              <Text style={styles.h1}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.xRkJweVS}>
            <View style={styles.MhhhXZCC}>
              <Text style={styles.MqLCMTKd}>Prep Time: </Text>
              <Text>{item.prep_time} minutes</Text>
            </View>
            <View style={styles.uXCtqgPR}>
              <Text style={styles.SvrVsbuB}>Cook Time: </Text>
              <Text>{item.cook_time} minutes</Text>
            </View>
          </View>
          <Text style={styles.text}>{item.instructions}</Text>
          <CustomButton title="Share Recipe" fontSize={20} />
        </View>
      </ScrollView>
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
  textContainer: {
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 30,
    color: "#FFFFFF",
    margin: 30,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: {
      width: -1,
      height: 1
    },
    textShadowRadius: 10
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10
  },
  JrJCYiRf: {
    width: "100%",
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "end"
  },
  xRkJweVS: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    flex: 1
  },
  MhhhXZCC: {
    flex: 1
  },
  uXCtqgPR: {
    flex: 1
  },
  MqLCMTKd: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E45700"
  },
  SvrVsbuB: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E45700"
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E45700",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  shareButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10
  },
  stNDJnlx: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default AboutTheRecipe;