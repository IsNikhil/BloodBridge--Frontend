type REACT_APP_ENVIRONMENT = "local" | "development" | "production";

export type Env = {
  name: REACT_APP_ENVIRONMENT;
  buildNumber: string;
  apiBaseUrl: string;   // ❗ NOT OPTIONAL
  host: string;
};

const host = `${window.location.protocol}//${window.location.host}`;

export const EnvVars: Env = {
  name: import.meta.env.VITE_REACT_APP_ENVIRONMENT as REACT_APP_ENVIRONMENT,
  buildNumber: import.meta.env.VITE_REACT_APP_BUILD_NUMBER,
  apiBaseUrl: import.meta.env.VITE_REACT_APP_API_BASE_URL as string,  // ❗ REQUIRED
  host,
};
