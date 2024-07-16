export const deleteApi = async (api) => {
  try {
    const response = await fetch(api, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApi = async (api) => {
  try {
    const response = await fetch(api);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postApi = async (api, data) => {
  try {
    const response = await fetch(api, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const putApi = async (api, data) => {
  try {
    const response = await fetch(api, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
