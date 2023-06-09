import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { api_v1_recipe_list } from "./../../store/foodfindingsAPI/recipes.slice.js";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductListing = ({
  navigation
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_recipe_list());
  }, []);
  const {
    entities: Recipes
  } = useSelector(state => state.Recipes);
  const [search, setSearch] = useState("");
  return <View style={styles.container}>
      <Text style={styles.title}>All Recipes</Text>
      <View style={styles.vcOLBUwm}>
        <TextInput style={styles.searchInput} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <TouchableOpacity style={[styles.filterButton, styles.QHGGWEEL]}>
          <View style={styles.filterButtonText}>
            <Icon style={styles.OrVIYXNT} name="filter" color="#6F2A00" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filterButtons}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Dinner</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={Recipes} renderItem={({
      item
    }) => <Pressable onPress={() => {
      navigation.navigate("aboutTheApp", {
        item: item
      });
    }}>
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("./broccoli.jpg")} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{item.title}</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.counterText}>{item.rating}</Text>
                  <View style={styles.KGIqfKnH}>
                    <Icon style={styles.icon} name="arrow-right" color="white" />
                  </View>
                </View>
              </View>
            </View>
          </Pressable>} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10
  },
  filterButton: {
    backgroundColor: "#F8D3BC",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  filterButtonText: {
    fontSize: 16,
    color: "#6F2A00"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10
  },
  productName: {
    fontSize: 18,
    color: "#E45700",
    fontWeight: "bold"
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5
  },
  counterText: {
    fontSize: 18,
    color: "#505050"
  },
  icon: {
    fontSize: 20
  },
  KGIqfKnH: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#6F2A00"
  },
  vcOLBUwm: {
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  QHGGWEEL: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  OrVIYXNT: {
    fontSize: 20
  }
});
export default ProductListing;