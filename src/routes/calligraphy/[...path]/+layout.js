// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url;

  /** @type {Array.<string>} */
  let images = [];
  let title = "";
  if (pathname === "/calligraphy/pan-tadeusz-2") {
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
  } else if (pathname === "/calligraphy/pan-tadeusz") {
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
  else if (pathname === "/calligraphy/as-you-like-it") {
    title = "As You Like It";
    images = [
      '/as-you-like-it/s01.webp',
      '/as-you-like-it/s02.webp',
      '/as-you-like-it/s03.webp',
      '/as-you-like-it/s04.webp',
      '/as-you-like-it/s05.webp',
      '/as-you-like-it/s06.webp',
      '/as-you-like-it/s07.webp',
    ];
  }
  else if (pathname === "/calligraphy/sonnets") {
    title = "Sonnets";
    images = [
      '/sonnets/s01.webp',
      '/sonnets/s02.webp',
      '/sonnets/s03.webp',
      '/sonnets/s04.webp',
      '/sonnets/s05.webp',
      '/sonnets/s06.webp',
    ];
  }
  else if (pathname === "/calligraphy/tryptych") {
    title = "Tryptych";
    images = [
      '/tryptyk/t01.webp',
      '/tryptyk/t02.webp',
      '/tryptyk/t03.webp',
      '/tryptyk/t04.webp',
      '/tryptyk/t05.webp',
      '/tryptyk/t06.webp',
      '/tryptyk/t07.webp',
      '/tryptyk/t08.webp',
      '/tryptyk/t09.webp',
      '/tryptyk/t10.webp',
      '/tryptyk/t11.webp',
      '/tryptyk/t12.webp',
      '/tryptyk/t13.webp',
      '/tryptyk/t14.webp',
      '/tryptyk/t15.webp',
    ];
  }
  else if (pathname === "/calligraphy/new-testament") {
    title = "New Testament";
    images = [];
  }

  return {
    pathname,
    title,
    images: images,
  };
};