
type EnvConfig = {
  profile?: string;  
  port: number;
  region: string;
  secretManagerKey: string;
  bucket: string;

};

export const env: { [key: string]: EnvConfig } = {
  local: {
    profile: "default",
    port: 3001,
    region: "us-east-1",
    secretManagerKey: "",
    bucket: ""
  },
  development: {
    port: 3001,
    region: "us-east-1",
    secretManagerKey: "",
    bucket: ""
  },
  production: {
    port: 3001,
    region: "us-east-1",
    secretManagerKey: "",
    bucket: ""
  },

};

const config = function () {
  const node_env: keyof typeof env = (process.env.NODE_ENV as keyof typeof env) || "local";
  return env[node_env];
};

export default config;