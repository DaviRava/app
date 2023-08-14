import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const info = require("./Info.json");

SplashScreen.preventAutoHideAsync();
let customFont = {
  "AppleGaramond-Bold": require("../assets/AppleGaramond-BoldItalic.ttf"),
  "AppleGaramond-Light": require("../assets/AppleGaramond-Light.ttf"),
  Game: require("../assets/GameOfSquids.ttf"),
  good: require("../assets/goodtimesrg.ttf"),
};

export default class Info extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  loadFonts = async () => {
    await Font.loadAsync(customFont);
    this.setState({ fontLoaded: true });
  };

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>RAVA FINANÇAS</Text>
          </View>
          <View style={styles.textTitleContainer}>
            <Text style={styles.titleGod}>
              {this.props.route.params.item.title}
            </Text>
            <Text style={styles.textGod}>
              {this.props.route.params.item.text}
            </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96cc7f",
  },
  title: {
    backgroundColor: "white",
    width: 420,
    height: 80,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  textTitle: {
    color: "#669E4F",
    fontFamily: "good",
    fontSize: 40,
  },
  uperContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    resizeMode: "contain",
    width: 130,
    height: 130,
    marginHorizontal: 10,
  },
  textContainer: {
    fontFamily: "AppleGaramond-Bold",
    fontSize: 17.5,
    color: "black",
  },
  titleQuestContainer: {
    justifyContent: "center",
    textAlign: "center",
    border: "solid",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 90,
    fontFamily: "GameOfSquids",
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  touchContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  textTouchContainer: {
    color: "white",
    fontSize: 20,
    fontFamily: "AppleGaramond-Light",
    width: 250,
    textAlign: "center",
  },
  textTitleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    marginTop: 15,
  },
  titleGod: {
    textAlign: "center",
    color: "white",
    fontFamily: "AppleGaramond-Bold",
    fontSize: 40,
    marginHorizontal: 20,
  },
  textGod: {
    marginTop: 20,
    color: "white",
    marginBottom: 20,
    fontFamily: "GameOfSquids",
    fontSize: 18,
    marginHorizontal: 20,
  },
});
