// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "https://anshuman.pythonanywhere.com/api";

export default async function fetcher(url, method="GET", body) {
  const apiUrl = BASE_URL + url;
  try {
    const res = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (res.status >= 400) {
      throw new Error(data.errors);
    }
    if (data.errors) {
      throw new Error(data.errors);
    }

    return data;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
