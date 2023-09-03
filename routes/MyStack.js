import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import List from '../screens/List';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  Home : {
     screen : Home
  },
  List : {
     screen: List
  }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);