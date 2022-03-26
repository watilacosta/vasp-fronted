import { http } from "@/services/config";

export  default {
    list: () => {
        return http.get('?method=getCountry&idVA=y2NdPcvKrxE%3D')
    }
}