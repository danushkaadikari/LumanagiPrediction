import React, { useMemo } from "react";

import WhiteLogo from "../assets/images/header-logo-white.svg";

import Twitter from "../assets/images/social-media/twitter.svg";
import Fb from "../assets/images/social-media/fb.svg";
import Linkedin from "../assets/images/social-media/linkedin.svg";
import Insta from "../assets/images/social-media/instagram.svg";
import Telegram from "../assets/images/social-media/telegram.svg";

const SocialMedia = () => {
  const socialMediaIcons = useMemo(() => {
    return [
      {
        icon: Twitter,
        type: "twitter",
        link: "https://twitter.com/LuMaNaGi",
      },
      {
        icon: Fb,
        type: "facebook",
        link: "https://www.facebook.com/Lumanagiswap",
      },
      {
        icon: Linkedin,
        type: "linkedin",
        link: "https://www.linkedin.com/company/lumanagi/",
      },
      {
        icon: Insta,
        type: "instagram",
        link: "https://www.instagram.com/lumanagi.dex/",
      },
      {
        icon: Telegram,
        type: "telegram",
        link: "https://t.me/+bMAZj4p_PVM2NGM0",
      },
    ];
  }, []);

  return (
    <>
      <div className="flex my-8 space-x-8">
        {socialMediaIcons.map((data, index) => (
          <React.Fragment key={`social-media-icon-item-${index}`}>
            <a href={data.link}>
              <img src={data.icon} alt={data.type} />
            </a>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

// const Company = () => {
//   const pages = useMemo(() => {
//     return [
//       {
//         label: "About us",
//         path: "/about-us",
//       },
//       {
//         label: "Blog",
//         path: "/blog",
//       },
//       {
//         label: "Press",
//         path: "/press",
//       },
//       {
//         label: "Careers",
//         path: "/careers",
//       },
//     ];
//   }, []);

//   const handleRoute = (path: string) => {
//     console.log("Routing to : ", path);
//   };

//   return (
//     <>
//       <div className="flex flex-col space-y-2 text-xl font-medium">
//         <p className="mb-2 text-gray-600">Company</p>
//         {pages.map((page, index) => (
//           <React.Fragment key={`company-item-${index}`}>
//             <p className="text-white" onClick={() => handleRoute(page.path)}>
//               {page.label}
//             </p>
//           </React.Fragment>
//         ))}
//       </div>
//     </>
//   );
// };

const Papers = () => {
  const pages = useMemo(() => {
    return [
      {
        label: "LitePaper",
        path: "",
        link: "https://lumanagi.com/wp-content/uploads/2023/01/Lumanagi-Lite-Paper-v3-1.pdf",
      },
      {
        label: "Pitch Deck",
        path: "",
      },
      {
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        label: "Terms & Conditions",
        path: "/terms-conditions",
      },
      {
        label: "Cookies",
        path: "/cookies",
      },
    ];
  }, []);

  const handleRoute = (path: string) => {
    console.log("Routing to : ", path);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-xl font-medium">
        <p className="mb-2 text-gray-600">Papers</p>
        {pages.map((page, index) => (
          <React.Fragment key={`company-item-${index}`}>
            {page.link ? (
              <a className="text-white" href={page.link}>
                {page.label}
              </a>
            ) : (
              <p className="text-white" onClick={() => handleRoute(page.path)}>
                {page.label}
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export function Footer() {
  return (
    <div className="relative bottom-0 w-full">
      <div className="flex justify-between mx-20 mt-40">
        <div className="flex flex-col justify-center">
          <img src={WhiteLogo} alt="logo" className="max-w-full w-72" />
          <SocialMedia />
        </div>
        <div className="flex space-x-20">
          <Papers />
        </div>
      </div>
      <hr className="mx-20 mt-8 mb-4 text-white"></hr>
      <div className="flex w-full mx-20 mb-10">
        <div className="flex justify-center w-full text-lg text-white">
          <p className="opacity-50">© Lumanagi</p>
          <p className="ml-2">
            <span className="opacity-50">HU</span> EN
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
