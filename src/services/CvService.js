import { DOMAIN } from "../config/system";
import { BaseService } from "./BaseService";
import { companyService } from "./CompanyService";

class CvsService extends BaseService {
  async getAllCvs() {
    const api = `${DOMAIN}/cv`;
    let result = await this.get(api);
    if (result.length > 0) {
      const company = await companyService.getInfoByToken();
      result = result.filter((item) => item.idCompany === company[0].id);
    }
    return result;
  }

  async getCvById(id) {
    const api = `${DOMAIN}/cv/${id}`;
    const result = await this.get(api);
    return result;
  }

  async deleteCv(id) {
    const api = `${DOMAIN}/cv/${id}`;
    const result = await this.delete(api);
    return result;
  }
}

export const cvsService = new CvsService();
