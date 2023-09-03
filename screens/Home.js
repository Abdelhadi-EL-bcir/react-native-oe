
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";

export default function Home({navigation}) {
  

  const hundlePress = ()=>{
    navigation.navigate('List');
  }

  return (
    <View >
      <Text>home</Text>
      <View style={styles.button}>
      <Button color={'red'} backgroundColo='red'  title='test' onPress={hundlePress}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    color: '#fff',
    alignItems : 'center',
    justifyContent : 'center',
    width : '100%'
  },
});

