module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    projects: ['<rootDir>/packages/**/jest.config.js'],
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/packages/**/__tests__/**/*.test.ts',
        '<rootDir>/packages/**/__tests__/**/*.test.tsx',
    ],
};
