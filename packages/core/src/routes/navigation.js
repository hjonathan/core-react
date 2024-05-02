import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import Modules from "../register";

const navDefault = [
  {
    name: "Dashboard",
    path:"/",
    href: "#",
    icon: HomeIcon
  },
  {
    name: "Home",
    path:"/home",
    href: "#",
    icon: HomeIcon
  },
  {
    name: "Table",
    path:"/table",
    href: "#",
    icon: HomeIcon
  },
  {
    name: "Team",
    path:"/team",
    href: "#",
    icon: FolderIcon
  },
  {
    name: "HeroIcons",
    path:"/heroicons",
    href: "#",
    icon: UsersIcon
  },
];

const loadNavigation = () => {
  const keys = Object.keys(Modules);

  let navsArray = [];

  keys.forEach((e) => {
    if(Modules[e]?.navs){
        navsArray = navsArray.concat(Modules[e]?.navs);
    }
  });

  return navDefault.concat(navsArray);
};

export const navs = loadNavigation();
