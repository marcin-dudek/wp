// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url;
  let images = [];
  let title = "";
  if (pathname === "/kaligrafia/pan-tadeusz-2") {
    title = "Pan Tadeusz";
    images = [
      '/akwarela/w106.webp',
      '/akwarela/w107.webp',
      '/akwarela/w108.webp'
    ];
  } else if (pathname === "/kaligrafia/pan-tadeusz") {
    title = "Pan Tadeusz";
    images = [
      '/akwarela/w109.webp',
      '/akwarela/w103.webp',
      '/akwarela/w108.webp'
    ];
  }
  else if (pathname === "/kaligrafia/as-you-like-it") { title = "As You Like It"; }
  else if (pathname === "/kaligrafia/sonnets") { title = "Sonnets"; }
  else if (pathname === "/kaligrafia/tryptyk") { title = "Tryptyk"; }
  else if (pathname === "/kaligrafia/nowy-testament") { title = "Pismo Święte Nowego Testamentu"; }

  return {
    pathname,
    title,
    images: images,
  };
};