import { baseUrl } from "./baseURL";

// export const get_images_with_given_face = async (obj) => {
//   const res = await fetch(`${baseUrl}files/`, {
//     method: "POST",
//     body: obj
//   })
//   const result = await res.json();
//   return result;
// };

export const get_image_with_emotions = async (obj) => {
  const res = await fetch(`${baseUrl}get_emotions/`, {
    method: "POST",
    body: obj
  })
  const result = await res.blob();
  return window.URL.createObjectURL(result);
};