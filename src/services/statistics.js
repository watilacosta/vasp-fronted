import { http } from "./config";

export default {
  list: () => {
    return http.get('?method=getStatistics&idVA=y2NdPcvKrxE%3D')
  }
}