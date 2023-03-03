import { api_v1_recipe_list } from "./../../store/foodfindingsAPI/recipes.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react";
import { Text, View, StyleSheet, Image, Pressable, FlatList } from "react-native";
const products = [{
  id: 1,
  title: "Dish name",
  count: 1,
  image: require("./assets/productImage.png")
}, {
  id: 2,
  title: "Dish name",
  count: 1,
  image: require("./assets/productImage.png")
}, {
  id: 3,
  title: "Dish name",
  count: 1,
  image: require("./assets/productImage.png")
}, {
  id: 4,
  title: "Dish name",
  count: 1,
  image: require("./assets/productImage.png")
}];

const ProductListing = ({
  navigation
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_recipe_list());
  }, []);
  const Recipes = useSelector(state => state.Recipes);
  return <View style={styles.container}>
      <FlatList data={Recipes} renderItem={({
      item
    }) => <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./images.png")} />
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.productName}>{item.title}</Text>
              <View style={styles.flexRow}>
                <Text style={styles.counterText}>{item.rating}</Text>
              </View>
            </View>
            <Pressable onPress={() => {
        navigation.navigate("aboutTheApp", {
          item: item
        });
      }}><View style={styles.qeoNNhmC}><Text style={styles.TiVkDKYZ}>Details</Text></View></Pressable>
          </View>} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 20
  },
  productContainer: {
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 10
  },
  imageContainer: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#E45700",
    borderWidth: 1
  },
  radio: {
    position: "absolute",
    top: 10,
    right: 10
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 10
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  productName: {
    fontSize: 18,
    color: "#313633",
    marginLeft: 10,
    flex: 1
  },
  counterText: {
    fontSize: 18,
    color: "#12D790"
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  qeoNNhmC: {
    backgroundColor: "#E45700",
    padding: 10,
    borderRadius: 10,
    marginTop: 5
  },
  TiVkDKYZ: {
    textAlign: "center",
    color: "white"
  }
});
export default ProductListing;