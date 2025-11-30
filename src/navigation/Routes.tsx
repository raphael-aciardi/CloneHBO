import { AppStackRoutes } from './AppStack';
import AuthStackRoutes from './AuthStack';

export function Routes() {
  const user = false;

  return user ? <AppStackRoutes /> : <AuthStackRoutes />;
}
