module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.jpg',
          '.png',
        ],
        alias: {
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@modules': './src/modules',
          '@config': './src/config',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
