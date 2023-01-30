import React from "react";
import { useState } from "react";
import {
  IoIosAlbums,
  IoIosBrowsers,
  IoIosFolder,
  IoIosMusicalNotes,
  IoIosPeople,
  IoIosRadio,
} from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { TbChevronDown, TbChevronRight } from "react-icons/tb";

const Collapse = ({ title }) => {
  const mainData = [
    { name: "Browse", icon: <IoIosBrowsers /> },
    { name: "Activity", icon: <HiUsers /> },
    { name: "Radio", icon: <IoIosRadio /> },
  ];
  const musicData = [
    { name: "Songs", icon: <IoIosMusicalNotes /> },
    { name: "Albums", icon: <IoIosAlbums /> },
    { name: "Artists", icon: <IoIosPeople /> },
    { name: "Local Files", icon: <IoIosFolder /> },
  ];
  const playlistData = [
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 1", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 2", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 3", icon: <IoIosMusicalNotes /> },
    { name: "Playlist 4", icon: <IoIosMusicalNotes /> },
  ];
  const [data, setData] = useState(
    title === "Main" ? mainData : title === "Music" ? musicData : playlistData
  );
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="navigation__list">
      <div
        className="navigation__list__header"
        role="button"
        data-toggle="collapse"
        href="#main"
        aria-expanded="true"
        aria-controls="main"
        onClick={() => setCollapse(!collapse)}
      >
        <span>{title}</span>
        <div
          className={`navigation__list__header__icon ${
            collapse ? "" : "navigation__list__header__rotate"
          }`}
        >
          <TbChevronRight size={15} />
        </div>
      </div>

      <div
        className={`navigation__list__collapse ${collapse ? "" : "show"}`}
        id="main"
      >
        {data.map((item, i) => (
          <a key={i} href="#" className="navigation__list__item">
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Collapse;
