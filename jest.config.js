const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
  },
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: { lines: 70 },
  },
}

module.exports = createJestConfig(customJestConfig)
