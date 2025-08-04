import dotenv from 'dotenv';

if (process.env.CI !== 'true') {
  dotenv.config({ path: 'env/prod.env' });
} else {
  console.log('Running in CI environment');
}

const requiredVars = ['MYUSERNAME', 'PASSWORD'];

requiredVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

export const USERNAME = process.env.MYUSERNAME!;
export const PASSWORD = process.env.PASSWORD!;
export const SERVICE_URL = process.env.SERVICE_URL!;
