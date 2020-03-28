import { CITIES } from "../config/cities"

export const getCityInfo = cityName => {
  switch (cityName) {
    case CITIES.POPRAD.NAME:
      return CITIES.POPRAD;
    case CITIES.HUMENNE.NAME:
      return CITIES.HUMENNE;
    case CITIES.PIESTANY.NAME:
      return CITIES.PIESTANY;
    case CITIES.TRNAVA.NAME:
      return CITIES.TRNAVA;
    default:
      return "";
  }
}