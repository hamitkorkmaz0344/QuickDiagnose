module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo']
    };
  };
  module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'], // BU SATIR EN SONDA OLACAK
    };
  };
  