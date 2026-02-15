import { createStackNavigator } from '@react-navigation/stack';
import OnboardingAuth from '../screens/OnboardingAuth';

const AuthStack = createStackNavigator();

export default function AuthStackRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="OnboardingAuth"
        component={OnboardingAuth}
      />
    </AuthStack.Navigator>
  );
}
