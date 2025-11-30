import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const AppStack = createStackNavigator();

export function AppStackRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}
