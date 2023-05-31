import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImgeViewer from "./components/ImageViewer";
import Button from "./components/Button";

const placeholderImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImgeViewer placeholderImage={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1/3,
    alignItems: "center",
  },
});
