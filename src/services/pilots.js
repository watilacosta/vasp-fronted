import { http } from "./config"

export default {
  list: () => {
    return http.get('?method=getPilotList&idVA=y2NdPcvKrxE%3D')
  },

  addPilot: (pilot) => {
    return http.post(`?method=addPilot&idVA=y2NdPcvKrxE%3D&
      d0=${pilot.firstName}&
      d1=${pilot.lastName}&
      d2=${pilot.countryIso}&
      d3=${pilot.birthdate}&
      d4=${pilot.email}&
      d5=${pilot.ivao}&
      d6=${pilot.vatsim}&
      d7=SBGR
    `)
  }
}

