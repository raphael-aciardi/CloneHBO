import { createStackNavigator } from '@react-navigation/stack';
import OnboardingAuth from '../screens/Auth/OnboardingAuth';
import EnterEmail from '../screens/Auth/EnterEmail';

const AuthStack = createStackNavigator();

export default function AuthStackRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="OnboardingAuth"
        component={OnboardingAuth}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="EnterEmail"
        component={EnterEmail}
      />
    </AuthStack.Navigator>
  );
}
