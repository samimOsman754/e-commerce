
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Images/logo (2).png"
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/'} className={({ isActive }) =>
    isActive ? "text-[#1E0D00] underline underline-offset-4" : "text-black "
  }>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/products'} className={({ isActive }) =>
    isActive ? "text-[#1E0D00] underline underline-offset-4" : "text-black "
  }>
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/about'} className={({ isActive }) =>
    isActive ? "text-[#1E0D00] underline underline-offset-4" : "text-black "
  }>
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/contact'} className={({ isActive }) =>
    isActive ? "text-[#1E0D00] underline underline-offset-4" : "text-black "
  }>
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <div className="max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            
            <Link to={"/"}>
            <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-16 rounded-full" />
            <span className="text-2xl font-semibold text-[#1E0D00]">Sunnah store</span>
            </div>
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              
              
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={true}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}