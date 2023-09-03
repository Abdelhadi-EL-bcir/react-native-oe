
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";

export default function Home({navigation}) {
  

  const hundlePress = ()=>{
    navigation.navigate('List');
  }

  return (
    <View>
      <Text>home</Text>
      <Button color={'red'} backgroundColo='red' style={styles.button} title='test' onPress={hundlePress}/>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    color: '#fff',
    backgroundColor: 'red',
    margin : 20
  },
});

