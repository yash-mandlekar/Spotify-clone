import React from "react";
import { TbChevronLeft, TbChevronRight, TbChevronDown } from "react-icons/tb";
import { MdNotifications, MdArchive } from "react-icons/md";
import Div from "../MiniComp/Div";
import Span from "../MiniComp/Span";
import Input from "../MiniComp/Input";
import Dropdown from "./Dropdown";
const Navbar = ({ fetchPlaylist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlaylist(e.target.artist.value);
  };

  return (
    <>
      <section className="header">
        <Div className="page-flows">
          <Span className="flow">
            <TbChevronLeft size={30} />
          </Span>

          <Span className="flow">
            <TbChevronRight size={30} />
          </Span>
        </Div>

        <form onSubmit={handleSubmit} className="search">
          <Input type="text" name="artist" placeholder="Search" />
        </form>

        <Div className="user">
          <Div className="user__notifications">
            <MdNotifications size={25} />
          </Div>

          <Div className="user__inbox">
            <MdArchive size={25} />
          </Div>

          <Div className="user__info">
            <Span className="user__info__img">
              <img
                src="https://www.yashmandlekar.in/static/media/photu.072af0ae01c3a241647e.jpg"
                alt="Profile Picture"
                className="img-responsive"
              />
            </Span>

            <Span className="user__info__name">
              <Span className="first">Yash</Span>

              <Span className="last">Kumar</Span>
            </Span>
          </Div>

          <Div className="user__actions">
            <Dropdown />
          </Div>
        </Div>
      </section>
    </>
  );
};

export default Navbar;
