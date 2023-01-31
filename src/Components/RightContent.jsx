import React from "react";

const RightContent = () => {
  return (
    <>
      <div className="content__right">
        <div className="social">
          <div className="friends">
            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Sam Smith
            </a>

            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Tarah Forsyth
            </a>

            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Ricahrd Tomkins
            </a>

            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Tony Russo
            </a>

            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Alyssa Marist
            </a>

            <a href="#" className="friend">
              <i className="ion-android-person"></i>
              Ron Samson
            </a>
          </div>

          <button className="button-light">Find Friends</button>
        </div>
      </div>
    </>
  );
};

export default RightContent;
