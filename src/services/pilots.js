import { http } from "./config"

export default {
  list: () => {
    return http.get('?method=getPilotList&idVA=y2NdPcvKrxE%3D')
  }
}