import React from "react";
import A from "../MiniComp/A";
import Div from "../MiniComp/Div";
import Section from "../MiniComp/Section";
import Collapse from "./Collapse";
import { FiPlusCircle } from "react-icons/fi";
import Span from "../MiniComp/Span";
import Img from "../MiniComp/Img";
import { IoCheckmarkSharp } from "react-icons/io5";

const LeftContent = ({ currentTrack }) => {
  return (
    <Div className="content__left">
      <Section className="navigation">
        <Collapse title="Main" />
        <Collapse title="Music" />
        <Collapse title="Playlists" />
      </Section>

      <Section className="playlist">
        <A href="#">
          <FiPlusCircle size={25} />
          <Span>New Playlist</Span>
        </A>
      </Section>

      {currentTrack && (
        <Section className="playing">
          <Div className="playing__art">
            <Img src={currentTrack.album.cover_small} alt="Album Art" />
          </Div>

          <Div className="playing__song">
            <A className="playing__song__name">{currentTrack.title}</A>

            <A className="playing__song__artist">{currentTrack.artist.name}</A>
          </Div>

          <Div className="playing__add">
            <IoCheckmarkSharp size={20} />
          </Div>
        </Section>
      )}
    </Div>
  );
};

export default LeftContent;
