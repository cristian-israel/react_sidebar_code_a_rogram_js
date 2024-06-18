import React, { useState } from "react";
import { Link } from "react-router-dom";

import ListIcon from '@mui/icons-material/List';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Home = () => {
  const menus = [
    { name: "Buscar", link: "/", icon: SearchIcon },
    { name: "Configurações", link: "/", icon: SettingsIcon },
    { name: "Emails", link: "/", icon: EmailIcon },
    { name: "Tikets", link: "/", icon: ConfirmationNumberIcon },
    { name: "Usuarios", link: "/", icon: PermIdentityRoundedIcon },
    { name: "Logs", link: "/", icon: AssessmentIcon }
  ];

  const [open, setOpen] = useState(false);

  return (
    <section className="flex">

      {/* Sidebar */}
      <div className={` flex flex-col bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>

        {/* Menu */}
        <div className="py-3 flex justify-end">
          <ListIcon
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Nav */}
        <div className="flex flex-col justify-center gap-4 h-full">

          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className=" group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md border">

              {/* Centraliazar o icone */}
              {/* <div>{React.createElement(menu?.icon, { size: "20" })}</div> */}
              <div className="w-5 h-5 flex items-center justify-center">
                {React.createElement(menu?.icon, { size: "20" })}
              </div>

              <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                {menu?.name}
              </h2>

              <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-4 group-hover:py-1 group-hover:left-[5rem] group-hover:duration-300 group-hover:w-fit`}>
                {menu?.name}
              </h2>

            </Link>
          ))}

        </div>

        {/* Logout */}
        <div className="py-3 flex justify-end">
          <LogoutRoundedIcon
            size={26}
            className="cursor-pointer"
          // onClick={() => setOpen(!open)}
          />
          <h2 className={`${!open && "hidden"} font-medium`}>Sair</h2>
        </div>

      </div>

      {/* Content */}
      <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div>

    </section>
  );
};

export default Home;

