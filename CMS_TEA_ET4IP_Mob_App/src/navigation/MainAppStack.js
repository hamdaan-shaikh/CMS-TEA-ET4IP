import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import LandingScreen from '../screens/LandingScreen';
import OverviewScreen from '../screens/OverviewScreen';
import PredictionScreen from '../screens/PredictionScreen';
import TraceCategoriesScreen from '../screens/TraceCategoriesScreen';
import MakePostScreen from '../screens/MakePostScreen';
import BubbleChartScreen from '../screens/BubbleChartScreen';
import BarChartScreen from '../screens/BarChartScreen';
import PieChartScreen from '../screens/PieChartScreen';
import SurveyScreen from '../screens/SurveyScreen';
import DetailedDataScreen from '../screens/DetailedDataScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
      <Stack.Screen name="PredictionScreen" component={PredictionScreen} />
      <Stack.Screen name="TraceCategoriesScreen" component={TraceCategoriesScreen} />
      <Stack.Screen name="MakePostScreen" component={MakePostScreen} />
      <Stack.Screen name="BarChartScreen" component={BarChartScreen} />
      <Stack.Screen name="PieChartScreen" component={PieChartScreen} />
      <Stack.Screen name="BubbleChartScreen" component={BubbleChartScreen} />
      <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
      <Stack.Screen name="DetailedDataScreen" component={DetailedDataScreen} />
      
    </Stack.Navigator>
  );
};