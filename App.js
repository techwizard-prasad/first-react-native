import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [selectedVal, setSelectedVal] = useState("column")

  return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Flex Box Example
        </Text>
        <View style={styles.buttonSection}>
          {["column", "row", "column-reverse", "row-reverse"].map((val) => 
            <TouchableOpacity style={[styles.button, {backgroundColor: selectedVal === val ? "orange" : "yellow"}]} key={val} onPress={() => setSelectedVal(val)}>
              <Text>{val}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.boxContainer, {flexDirection: selectedVal}]}>
          <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
          <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold"
  },
  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    padding: "5px",
    margin: "5px",
    width: "45%",
    textAlign: "center",
    backgroundColor: "yellow",
    borderRadius: "5px"
  },
  boxContainer: {
    marginTop: '20px',
    flex: 1
  },
  box:{
    width: '50px',
    height: "50px",
  }
});
