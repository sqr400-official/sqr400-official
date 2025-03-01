import {
  FaPlusCircle,
  FaFileAlt,
  FaTachometerAlt,
  FaBoxOpen,
  FaCubes,
} from "react-icons/fa";

export const adminNavigation = [
  {
    title: "Dashboard",
    icon: FaTachometerAlt,
    link: "/admin/dashboard",
  },
  {
    title: "Add Post",
    icon: FaPlusCircle, // No JSX here
    link: "/admin/create-post",
  },
  {
    title: "All Posts",
    icon: FaFileAlt,
    link: "/admin/all-posts",
  },
  {
    title: "Add Product",
    icon: FaBoxOpen,
    link: "#",
  },
  {
    title: "All Products",
    icon: FaCubes,
    link: "#",
  },
];
