let url;
const petType = sessionStorage.getItem("pettype");

if (process.env.NODE_ENV === "development") {
  url = "http://pawwsumflask.herokuapp.com";
}

if (process.env.NODE_ENV === "production") {
  url = "https://pawwsumflask.herokuapp.com";
}

export const CATEGORIES_URL = `${url}/categories`;
export const PRODUCTS_URL = `${url}/products`;
export const RECOMMEND_URL = `${url}/recommendations/${petType}`;
export const BANNERS_URL = `${url}/banners`;
