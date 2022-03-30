let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:5000";
}

if (process.env.NODE_ENV === "production") {
  url = "https://sabka-bazaar-apis.herokuapp.com";
}

export const CATEGORIES_URL = `${url}/categories`;
export const PRODUCTS_URL = `${url}/products`;
export const BANNERS_URL = `${url}/banners`;
