export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testMatch: ["<rootDir>/src/**/*.test.[jt]sx"],
  moduleNameMapper: { "\\.css$": "<rootDir>/test/styleMock.js" },
  transform: {
    "^.+\\.[jt]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: { syntax: "ecmascript", jsx: true },
          transform: { react: { runtime: "automatic" } },
        },
        module: { type: "commonjs" },
      },
    ],
  },
};
