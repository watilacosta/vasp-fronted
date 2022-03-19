import { http } from "./config"

export default {
  list: () => {
    return http.get('?method=getStaffList&idVA=y2NdPcvKrxE%3D')
  }
}