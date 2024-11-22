import { getDefaultConfig } from 'metro-config';

const config = async () => {
  //const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    serializer: {
      ...defaultConfig.serializer,
      isThirdPartyModule(module: { path: string }) {
        // Block virtual modules from appearing in the source maps.
        if (module.path.includes('node_modules')) {
          // Allow specific modules or folders here
          if (module.path.includes('expo-router') || module.path.includes('expo')) {
            return false; // Not a third-party module
          }
          return true; // It is a third-party module
        }
        return false; // Treat non-node_modules as first-party modules
      },
    },
  };
};

export default config;
