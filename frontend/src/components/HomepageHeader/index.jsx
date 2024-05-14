// import React from "react";
import { Text, Img } from "./..";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HomepageHeader({
  home = "Home",
  shop = "Shop",
  aboutus = "About Us",
  contactus = "Contact Us",
  signup = "Sign Up",
  ...props
}) {
  return (
    <div {...props}>
      <header className="flex border-b border-solid border-gray-200 bg-slate-400 font-bold py-10 sm:py-1">
        <div className="max-w-screen-xl flex items-center justify-between gap-2 md:flex-col md:p-5">
          <ul className="flex items-center gap-20 pr-2.5">
            <li>
              <Img
                src="\public\Images\Electromarket.png"
                alt="headerlogo"
                className="h-[50px] object-contain object-left-top"
              />
            </li>
            <li>
              <a
                href="#"
                className="border-b-2 border-solid border-deep_orange-A700"
              >
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {home}
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="mb-[9px]">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {shop}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {aboutus}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {signup}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {contactus}
                </Text>
              </a>
            </li>
            <div className="flex gap-2">
              <a href="#">
                <Img
                  src="./public/assets/search-svgrepo-com.svg"
                  alt="search"
                  className="h-[32px] w-[32px]"
                />
              </a>
              <a href="#">
                <Img
                  src="./public/assets/bag-shopping-svgrepo-com.svg"
                  alt="bag"
                  className="h-[32px] w-[32px]"
                />
              </a>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}
HomepageHeader.propTypes = {
  home: PropTypes.string,
  shop: PropTypes.string,
  accessories: PropTypes.string,
  aboutus: PropTypes.string,
  contactus: PropTypes.string,
  signup: PropTypes.string,
};
