# 🎬 HBO Max Clone

Mobile application built with **React Native** that replicates the HBO Max streaming interface, focusing on smooth navigation, clean component structure, and TypeScript best practices.

This project aims to deepen knowledge in:

- React Native application structure
- Component-based architecture
- Static typing with TypeScript
- Responsive layout organization
- Scalable front-end architecture patterns

---

## 📱 Preview

> Interface inspired by the HBO Max streaming experience  
> (Will be added images)

---

## 🛠 Technologies Used

- React Native
- React
- TypeScript
- Metro Bundler
- Babel
- ESLint
- Prettier
- Jest

---

## 📦 Production Dependencies

Core libraries required for the application to run on mobile devices:

- **react (v19.1.1)**  
  Core library for building user interfaces.

- **react-native (v0.82.1)**  
  Framework that allows JavaScript to run as native Android/iOS code.

- **react-native-safe-area-context**  
  Handles safe areas on modern devices (notch, status bar, bottom navigation).

- **@react-native/new-app-screen**  
  Default starter components from React Native.

---

## 🛠 Development Dependencies (devDependencies)

Tools used during development only.

### 🔧 Compilation & Configuration

- **typescript**  
  Adds static typing for improved reliability and maintainability.

- **@babel/core & presets**  
  Transpiles modern JavaScript and JSX into compatible code for native engines.

- **metro-config**  
  Configuration for Metro Bundler, responsible for packaging JavaScript code.

---

### 💻 CLI & Platform Support

- **@react-native-community/cli**  
  Command-line tools to run and manage the project.

- **cli-platform-android**  
  Android build support.

- **cli-platform-ios**  
  iOS build support.

---

### 🧹 Code Quality

- **eslint**  
  Identifies code issues and enforces best practices.

- **prettier**  
  Automatically formats code for consistency.

---

### 🧪 Testing

- **jest**  
  Main testing framework.

- **react-test-renderer**  
  Allows testing React components without running a simulator.

- **@types/***  
  Type definitions to ensure TypeScript compatibility with Jest and React.

---

## 📂 Project Structure

src/
├── components/
├── screens/
├── navigation/
├── services/
├── hooks/
├── contexts/
└── assets/


The structure was designed to ensure:

- Separation of concerns
- Scalability
- Maintainability

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/hbo-clone.git
2️⃣ Install dependencies
npm install
or

yarn
3️⃣ Run the project
Android:

npx react-native run-android
iOS:

npx react-native run-ios
🎯 Project Goals
This project was built to:

Practice scalable React Native architecture

Apply TypeScript best practices

Improve component organization

Simulate a real-world production-like application

🔮 Future Improvements
Integrate a real streaming API

Add authentication flow

Implement dynamic detail screens

Expand unit test coverage

Improve animations and transitions
