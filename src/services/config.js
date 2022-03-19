import axios from "axios";

export const http = axios.create({
  baseURL: 'https://www.uesva.com/soap/ApiServiceHTTP.php',
  timeout: 10000,
})