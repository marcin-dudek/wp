// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url;
  let images = [];
  let title = "";
  console.log(url.pathname);
  if (pathname === "/kaligrafia/pan-tadeusz-2") {
    title = "Pan Tadeusz";
    images = [
      '/img_a/w106.webp',
      '/img_a/w107.webp',
      '/img_a/w108.webp'
    ];
  } else if (pathname === "/kaligrafia/pan-tadeusz") {
    title = "Pan Tadeusz";
    images = [
      '/img_a/w102.webp',
      '/img_a/w103.webp',
      '/img_a/w104.webp'
    ];
  }

  return {
    pathname,
    title,
    images: images,
  };
};