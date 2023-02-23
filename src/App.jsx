import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import "./App.css";
import A from "./MiniComp/A";
import Button from "./MiniComp/Button";
import Div from "./MiniComp/Div";
import I from "./MiniComp/I";
import Img from "./MiniComp/Img";
import Li from "./MiniComp/Li";
import Section from "./MiniComp/Section";
import Span from "./MiniComp/Span";
import Ul from "./MiniComp/Ul";
import Input from "./MiniComp/Input";
import Navbar from "./Components/Navbar";
import { TbChevronRight } from "react-icons/tb";
import LeftContent from "./Components/LeftContent";
import Axios from "./Components/Axios";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import MiddleContent from "./Components/MiddleContent";
import RightContent from "./Components/RightContent";
import Loader from "./Components/Loader";

const App = () => {
  const audioRef = useRef(null);
  const [playlist, setplaylist] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [time, setTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const { currentTime, duration } = time;

  const fetchPlaylist = async (e) => {
    setplaylist([]);
    const { data } = await Axios.get(`/search?q=${e || "eminem"}`);
    if (data.data) {        
      setplaylist(data.data);
    } else {
      fetchPlaylist(e);
    }
  };

  useEffect(() => {
    fetchPlaylist("Weekend");
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (audioRef.current) {
          var ct;
          if (Math.floor(audioRef.current.currentTime) < 10) {
            ct = "00:" + "0" + Math.floor(audioRef.current.currentTime);
          } else {
            ct = "00:" + Math.floor(audioRef.current.currentTime);
          }
          setTime({
            currentTime: ct,
            duration: Math.floor(audioRef.current.duration) || "30",
          });
        }
      }, 1000);
      const interval2 = setInterval(() => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime);
        }
      }, 100);
      return () => {
        clearInterval(interval);
        clearInterval(interval2);
      };
    }
  }, [isPlaying]);
  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handleTrack = (e) => {
    if (e) {
      setCurrentTrack(e);
    } else {
      if (currentTrack < playlist.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setCurrentTrack(0);
      }
    }
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setProgress(0);
    setTimeout(() => {
      setIsPlaying(true);
      audioRef.current.play();
    }, 100);
  };
  return (
    <>
      <Navbar fetchPlaylist={fetchPlaylist} />
      {playlist && (
        <Section className="content">
          <LeftContent currentTrack={playlist[currentTrack]} />
          {playlist.length > 0 ? (
            <MiddleContent
              playlist={playlist}
              handleTrack={handleTrack}
              fetchPlaylist={fetchPlaylist}
              handlePlay={handlePlay}
            />
          ) : (
            <Loader />
          )}
          <RightContent playlist={playlist} />
        </Section>
      )}

      {playlist.length > 0 && (
        <section className="current-track">
          <audio ref={audioRef} src={playlist[currentTrack].preview}></audio>
          <IoIosSkipBackward
            color="white"
            size={30}
            onClick={() => {
              audioRef.current.currentTime -= 10;
            }}
          />
          {isPlaying ? (
            <IoPauseCircleOutline
              color="white"
              size={60}
              onClick={handlePause}
            />
          ) : (
            <IoPlayCircleOutline color="white" size={60} onClick={handlePlay} />
          )}
          <IoIosSkipForward
            color="white"
            size={30}
            onClick={() => {
              audioRef.current.currentTime += 10;
            }}
          />

          <div className="current-track__progress">
            <div className="current-track__progress__start">{currentTime}</div>

            <div className="current-track__progress__bar">
              <input
                className="slider"
                type="range"
                min="0"
                max="3000"
                value={progress * 100}
                onChange={(e) => {
                  setProgress(e.target.value / 100);
                  audioRef.current.currentTime = e.target.value / 100;
                }}
              />
            </div>

            <div className="current-track__progress__finish">00:{duration}</div>
          </div>

          <div className="current-track__options">
            <a href="#" className="lyrics">
              Lyrics
            </a>

            <span className="controls">
              <a href="#" className="control">
                <i className="ion-navicon"></i>
              </a>

              <a href="#" className="control">
                <i className="ion-shuffle"></i>
              </a>

              <a href="#" className="control">
                <i className="fa fa-refresh"></i>
              </a>

              <a href="#" className="control devices">
                <i className="ion-iphone"></i>
                <span>Devices Available</span>
              </a>

              <a href="#" className="control volume">
                <i className="ion-volume-high"></i>

                <div id="song-volume"></div>
              </a>
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default App;
