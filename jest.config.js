const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases from tsconfig.json
        '^@/(.*)$': '<rootDir>/src/$1',
        // Handle CSS imports
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);

