import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import A from "../MiniComp/A";
import Div from "../MiniComp/Div";

const RightContent = () => {
  return (
    <>
      <Div className="content__right">
        <Div className="social">
          <Div className="friends">
            <A href="#" className="friend">
              <IoPersonSharp />
              Sam Smith
            </A>

            <A href="#" className="friend">
              <IoPersonSharp />
              Tarah Forsyth
            </A>

            <A href="#" className="friend">
              <IoPersonSharp />
              Ricahrd Tomkins
            </A>

            <A href="#" className="friend">
              <IoPersonSharp />
              Tony Russo
            </A>

            <A href="#" className="friend">
              <IoPersonSharp />
              Alyssa Marist
            </A>

            <A href="#" className="friend">
              <IoPersonSharp />
              Ron Samson
            </A>
          </Div>

          <button className="button-light">Find Friends</button>
        </Div>
      </Div>
    </>
  );
};

export default RightContent;
