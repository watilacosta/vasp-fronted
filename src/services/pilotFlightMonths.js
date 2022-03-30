import { http } from "@/services/config";

export  default {
    list: () => {
        return http.get('?method=getPilotFlightsMonths&idVA=y2NdPcvKrxE%3D')
    }
}
