import { deleteApi, fetchApi, postApi, putApi } from "../utils/fetchApi";

export class BaseService {
  async get(api) {
    const result = await fetchApi(api);
    return result;
  }
  async post(api, data) {
    const result = await postApi(api, data);
    return result;
  }
  async delete(api) {
    const result = await deleteApi(api);
    return result;
  }
  async put(api, data) {
    const result = await putApi(api, data);
    return result;
  }
}
