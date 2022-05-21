import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import TopicCard from "./shared/topicCard.js";


let topictItem = [
  {
    image: require("./assets/Group 14.png"),
    title: "Business",
    key: "1",
  },
  {
    image: require("./assets/chemistry.png"),
    title: "Chemistry",
    key: "2",
  },
];

let courseItem1 = [
  {
    image: require("./assets/Image.png"),
    title: "Java Development",
    icon: require("./assets/icon5.png"),
    byWho: "Nguyen Shane",
    price: "$66",
    numberOfHours: "16 hours",
    key: "1",
  },
  {
    image: require("./assets/Image.png"),
    title: "C++ Development",
    icon: require("./assets/icon5.png"),
    byWho: "john Arthur",
    price: "$90",
    numberOfHours: "20 hours",
    key: "2",
  },
];
let courseItem2 = [
  {
    image: require("./assets/Image.png"),
    title: "Linear Algebra",
    icon: require("./assets/icon5.png"),
    byWho: "David Kian",
    price: "$70",
    numberOfHours: "25 hours",
    key: "1",
  },
  {
    image: require("./assets/Image.png"),
    title: " Probability",
    icon: require("./assets/icon5.png"),
    byWho: "shaun Boley",
    price: "$90",
    numberOfHours: "27 hours",
    key: "2",
  },
];
let courseItem3 = [
  {
    image: require("./assets/Image.png"),
    title: "Graphic Design",
    icon: require("./assets/icon5.png"),
    byWho: "Michael Stewart",
    price: "$60",
    numberOfHours: "16 hours",
    key: "1",
  },
  {
    image: require("./assets/Image.png"),
    title: "Ui/UX Design",
    icon: require("./assets/icon5.png"),
    byWho: "Natalie Jaster",
    price: "$88",
    numberOfHours: "20 hours",
    key: "2",
  },
];
let courseItem4 = [
  {
    image: require("./assets/Image.png"),
    title: "Nanotechnology",
    icon: require("./assets/icon5.png"),
    byWho: "Dorian Soult",
    price: "$56",
    numberOfHours: "23 hours",
    key: "1",
  },
  {
    image: require("./assets/Image.png"),
    title: "Chemical Biology",
    icon: require("./assets/icon5.png"),
    byWho: "Kim Allison",
    price: "$70",
    numberOfHours: "21 hours",
    key: "2",
  },
];

let subject = ({ item }) => (
  <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <TopicCard>
      <Image source={item.image} style={styles.imageStyle1} />
      <Text style={styles.textimage}>{item.title}</Text>
    </TopicCard>
  </TouchableOpacity>
);

let body = ({ item }) => (
  <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <TopicCard>
      <View style={styles.container2}>
        <View>
          <Image source={item.image} style={styles.imageStyle2} />
        </View>
        <View>
          <Text style={styles.texttitle}>{item.title}</Text>
          <View style={styles.container7}>
            <Image source={item.icon} style={styles.iconStyle} />
            <Text style={styles.itemtext1}>{item.byWho}</Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.itemtext2}>{item.price}</Text>
            <Text style={styles.itemtext3}>{item.numberOfHours}</Text>
          </View>
        </View>
      </View>
    </TopicCard>
  </TouchableOpacity>
);

let onChangeNumber = () => {
  console.log("hello");
};

let pressHandler = (key) => {
  console.log("hello");
  // هخليها بالنفيجيشن تروح لصفحة تانية
};
let pressHandler1 = () => {
  console.log("hello");
  // هخليها بالنفيجيشن تروح لصفحة تانية
};

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container3}>
          <View>
            <Text style={styles.text1}>Welcome Back </Text>
            <Text style={styles.text2}>Let’s start learning</Text>
          </View>
          <TouchableOpacity onPress={() => pressHandler()}>
            <Image
              source={require("./assets/user.png")}
              style={styles.profile}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container4}>
          <Image
            source={require("./assets/icon-search.png")}
            style={styles.searchicon}
          />
          <TextInput
            placeholder="Find Course"
            placeholderTextColor={"#cccccc"}
            onChangeText={onChangeNumber}
            style={styles.input}
          />
          <Image
            source={require("./assets/icon-filter.png")}
            style={styles.filtericon}
          />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.container5}>
          <Text style={styles.textHeader1}>Topics</Text>
          <TouchableOpacity onPress={() => pressHandler()}>
            <Text style={styles.textHeader2}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list1}>
          <FlatList data={topictItem} renderItem={subject} numColumns={2} />
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <View style={styles.container5}>
            <Text style={styles.textbody1}>Popular in computer science</Text>
            <TouchableOpacity onPress={() => pressHandler()}>
              <Text style={styles.textbody2}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list2}>
            <FlatList data={courseItem1} renderItem={body} numColumns={2} />
          </View>
        </View>

        <View>
          <View style={styles.container5}>
            <Text style={styles.textbody3}>Popular in Mathematics</Text>
            <TouchableOpacity onPress={() => pressHandler()}>
              <Text style={styles.textbody4}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list2}>
            <FlatList data={courseItem2} renderItem={body} numColumns={2} />
          </View>
        </View>

        <View>
          <View style={styles.container5}>
            <Text style={styles.textbody5}>Popular in Design</Text>
            <TouchableOpacity onPress={() => pressHandler()}>
              <Text style={styles.textbody6}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list2}>
            <FlatList data={courseItem3} renderItem={body} numColumns={2} />
          </View>
        </View>

        <View>
          <View style={styles.container5}>
            <Text style={styles.textbody7}>Popular in Chemistry</Text>
            <TouchableOpacity onPress={() => pressHandler()}>
              <Text style={styles.textbody8}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list2}>
            <FlatList data={courseItem4} renderItem={body} numColumns={2} />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginTop: 0,
  },
  container1: {
    backgroundColor: "#3D5CFF",
    height: 170,
  },
  container7: {
    flexDirection: "row",
  },
  container3: {
    flexDirection: "row",
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Trebuchet MS",
    marginTop: 40,
    marginLeft: 30,
  },
  text2: {
    color: "white",
    fontFamily: "Trebuchet MS",
    fontSize: 15,
    marginLeft: 30,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 0.5,
    marginLeft: 130,
    marginTop: 40,
  },
  container4: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 40,
    width: 320,
    marginLeft: 27,
    marginTop: 35,
    borderRadius: 10,
  },
  input: {
    height: 30,
    width: 230,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 0,
  },
  searchicon: {
    width: 18,
    height: 16,
    marginTop: 13,
    marginLeft: 15,
    marginRight: 10,
  },
  filtericon: {
    width: 18,
    height: 16,
    marginTop: 13,
    marginLeft: 15,
  },

  container5: {
    flexDirection: "row",
  },

  textHeader1: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 17,
    padding: 13,
    marginTop: 2,
  },
  textHeader2: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#3D5CFF",
    marginLeft: 205,
    marginTop: 2,
    padding: 13,
  },

  imageStyle1: {
    width: 70,
    height: 70,
  },
  textimage: {
    fontSize: 18,
    paddingTop: 15,
    paddingLeft: 0,
  },
  textbody1: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 17,
    padding: 13,
  },
  textbody2: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#3D5CFF",
    marginLeft: 22,
    marginTop: 2,
    padding: 13,
  },
  textbody3: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 17,
    padding: 13,
  },
  textbody4: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#3D5CFF",
    marginLeft: 64,
    marginTop: 2,
    padding: 13,
  },
  textbody5: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 17,
    padding: 13,
  },
  textbody6: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#3D5CFF",
    marginLeft: 112,
    marginTop: 2,
    padding: 13,
  },
  textbody7: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 17,
    padding: 13,
  },
  textbody8: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#3D5CFF",
    marginLeft: 85,
    marginTop: 2,
    padding: 13,
  },

  imageStyle2: {
    width: 100,
    height: 70,
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
  },
  texttitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Arial",
  },
  iconStyle: {
    tintColor: " #d9d9d9",
    width: 16,
    height: 16,
    marginRight: 5,
    marginTop: 3,
  },

  itemtext1: {
    color: " #d9d9d9",
    marginTop: 2,
    marginLeft: 5,
  },
  itemtext2: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 7,
  },
  itemtext3: {
    marginLeft: 28,
    backgroundColor: "#ffece6",
    color: "coral",
    borderRadius: 10,
    fontSize: 10.7,
    width: 58,
    height: 13,
    paddingLeft: 7,
    paddingBottom: 15,
    marginTop: 5,
  },
});