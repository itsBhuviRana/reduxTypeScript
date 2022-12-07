module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src',
          '@': './',
          __tests__: './__tests__'
        }
      }
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
