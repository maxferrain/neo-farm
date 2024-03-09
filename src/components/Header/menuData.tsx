import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "О нас",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Цели проекта",
    path: "/mission",
    newTab: false,
  },
  {
    id: 5,
    title: "Связаться с нами",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
