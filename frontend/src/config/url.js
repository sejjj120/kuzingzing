const isDev = true;

const baseUrl = isDev
  ? "http://localhost:8000"
  : "http://ec2-107-23-170-104.compute-1.amazonaws.com:8080";
const corsProxy = isDev ? "" : "https://sgi105-cors-anywhere.herokuapp.com/";

export { baseUrl, corsProxy };
