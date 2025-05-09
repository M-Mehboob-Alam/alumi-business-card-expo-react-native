import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function App() {
  return (
    <ScrollView  style={{ paddingHorizontal: 10 }}>

    <View style={styles.container}>
      <Image source={require('./assets/banner.png')} style={{ aspectRatio: 16 / 14, width: '100%', resizeMode: 'contain' }} />
      <Image source={require('./assets/mehboob.png')} style={{ height: 100, width: 100, borderRadius: 50, marginTop: -140, borderColor: 'white', borderWidth: 5, }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Mehboob Alam</Text>
      <Text>A Freelance Developer</Text>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
        <FontAwesome6 name="linkedin-in" size={24} color="black" />
        <FontAwesome6 name="at" size={24} color="black" />
        <FontAwesome6 name="github" size={24} color="black" />
      </View>
      
      <Text >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});