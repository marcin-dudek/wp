// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url;
  let images = [];
  let title = "";
  if (pathname === "/kaligrafia/pan-tadeusz-2") {
    title = "Pan Tadeusz";
    images = [
      '/pan-tadeusz-2/pt01.webp',
      '/pan-tadeusz-2/pt02.webp',
      '/pan-tadeusz-2/pt03.webp',
      '/pan-tadeusz-2/pt04.webp',
      '/pan-tadeusz-2/pt05.webp',
      '/pan-tadeusz-2/pt06.webp',
      '/pan-tadeusz-2/pt07.webp',
      '/pan-tadeusz-2/pt08.webp',
      '/pan-tadeusz-2/pt09.webp',
      '/pan-tadeusz-2/pt10.webp',
      '/pan-tadeusz-2/pt11.webp',
      '/pan-tadeusz-2/pt12.webp',
    ];
  } else if (pathname === "/kaligrafia/pan-tadeusz") {
    title = "Pan Tadeusz";
    images = [
      '/pan-tadeusz-1/pt1.webp',
      '/pan-tadeusz-1/pt2.webp',
      '/pan-tadeusz-1/pt3.webp',
      '/pan-tadeusz-1/pt4.webp',
      '/pan-tadeusz-1/pt5.webp',
      '/pan-tadeusz-1/pt6.webp',
      '/pan-tadeusz-1/pt7.webp',
      '/pan-tadeusz-1/pt8.webp',
      '/pan-tadeusz-1/pt9.webp',
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