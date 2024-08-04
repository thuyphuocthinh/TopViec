import { DOMAIN, TOKEN } from "../config/system";
import { BaseService } from "./BaseService";
import { cityService } from "./CityService";
import { companyService } from "./CompanyService";

class JobsService extends BaseService {
  async getAllJobs() {
    const api = `${DOMAIN}/jobs`;
    let result = await this.get(api);
    const company = await companyService.getInfoByToken();
    if (result.length > 0 && company.length > 0) {
      result = result.filter((item) => item.idCompany === company[0].id);
      result.forEach(async (item) => {
        item.companyName = company[0].companyName;
        item.city.map(async (ct, index) => {
          const result = await cityService.getCityByKey(ct);
          item.city.splice(index, 0);
          item.city[index] = result[0].value;
        });
      });
    }
    return result;
  }
  async getJobById(id) {
    const api = `${DOMAIN}/jobs/${id}`;
    const result = await this.get(api);
    return result;
  }
  async deleteJob(id) {
    const api = `${DOMAIN}/jobs/${id}`;
    const result = await this.delete(api);
    return result;
  }
  async updateJob(data, id) {
    const api = `${DOMAIN}/jobs/${id}`;
    const result = await this.put(api, data);
    return result;
  }
  async createJob(data) {
    const api = `${DOMAIN}/jobs`;
    const result = await this.post(api, data);
    return result;
  }
}

export const jobsService = new JobsService();
