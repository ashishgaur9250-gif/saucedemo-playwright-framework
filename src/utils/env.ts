const envName = process.env.ENV || "qa";

const envConfig = {
  dev: {
    name: "dev",
    baseUrl: "https://dev.saucedemo.com",
    username: "dev_user",
    password: "dev_password"
  },
  qa: {
    name: "qa",
    baseUrl: "https://www.qa.saucedemo.com",
    username: "standard_user",
    password: "secret_sauce"
  },
  stage: {
    name: "stage",
    baseUrl: "https://stage.saucedemo.com",
    username: "stage_user",
    password: "stage_password"
  }
};

export const env = envConfig[envName as keyof typeof envConfig] || envConfig.qa;
export type Environment = typeof env;