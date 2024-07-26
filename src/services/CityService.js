import { DOMAIN } from "../config/system";
import { BaseService } from "./BaseService";

class CityService extends BaseService {
  async getCityByKey(key) {
    const api = `${DOMAIN}/city?key=${key}`;
    const result = await this.get(api);
    return result;
  }
  async getAllCities () {
    const api = `${DOMAIN}/city`;
    const result = await this.get(api);
    return result;
  }
}

export const cityService = new CityService();
