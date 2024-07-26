import { DOMAIN } from "../config/system";
import { BaseService } from "./BaseService";

class TagsService extends BaseService {
  async getAllTags() {
    const api = `${DOMAIN}/tags`;
    const result = this.get(api);
    return result;
  }
}

export const tagsService = new TagsService();