import axios from "axios";

export function getDataServer(query, page) {
  const searchParams = {
    key: "24363858-de97e8884b51299c8baeea76d",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
  };

  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}`,
    { params: searchParams }
  );

  return response.then(({ data }) => data);
}