import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-typescript-app',
  webDir: "build",
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  bundledWebRuntime: false
};

export default config;
