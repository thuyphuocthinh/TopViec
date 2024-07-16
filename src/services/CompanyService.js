import { DOMAIN, TOKEN } from "../config/system";
import { randomString } from "../utils/randomString";
import { BaseService } from "./BaseService";

class CompanyService extends BaseService {
  async login(data) {
    const api = `${DOMAIN}/company?email=${data.email}&password=${data.password}`;
    const result = await this.get(api);
    return result;
  }

  async getInfoByToken() {
    const token = localStorage.getItem(TOKEN);
    const api = `${DOMAIN}/company?token=${token}`;
    const result = await this.get(api);
    return result;
  }

  async register(data) {
    const api = `${DOMAIN}/company`;
    const info = {
      ...data,
      token: randomString(20),
      phone: "",
      address: "",
      workingTime: "",
      website: "",
      quantityPeople: "",
      description: "",
      detail: "",
    };
    const result = await this.post(api, info);
    return result;
  }

  async updateProfile(data, id) {
    const api = `${DOMAIN}/company/${id}`;
    const result = await this.put(api, data);
    return result;
  }

  async checkToken(data) {
    const api = `${DOMAIN}/company?token=${data}`;
    const result = await this.get(api);
    return result;
  }

  async checkEmail(data) {
    const api = `${DOMAIN}/company?email=${data}`;
    const result = await this.get(api);
    return result;
  }
}

export const companyService = new CompanyService();
