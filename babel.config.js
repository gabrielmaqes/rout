module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          core: './src/core',
          global: './src/global',
          main: './src/main',
          models: './src/models',
          modules: './src/modules',
          theme: './src/theme',
        },
      },
    ],
  ],
};
