import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingAuth() {
  return (
    <View style={styles.container}>
      {/* Aqui você pode colocar uma imagem de fundo depois */}
      <SafeAreaView style={styles.content}>
        <Text style={styles.logo}>MAX</Text>

        <View style={styles.bottomContainer}>
          <Text style={styles.title}>O entretenimento que você ama.</Text>

          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>ASSINAR AGORA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonTextSecondary}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: { fontSize: 40, fontWeight: 'bold', color: '#fff', marginTop: 50 },
  bottomContainer: { width: '100%', marginBottom: 40 },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
  },
  buttonPrimary: {
    backgroundColor: '#002be7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  buttonTextSecondary: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
