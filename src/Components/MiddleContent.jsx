import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import A from "../MiniComp/A";
import Button from "../MiniComp/Button";
import Div from "../MiniComp/Div";
import Img from "../MiniComp/Img";
import Li from "../MiniComp/Li";
import Span from "../MiniComp/Span";
import Ul from "../MiniComp/Ul";

const MiddleContent = ({
  playlist,
  handleTrack,
  fetchPlaylist,
  handlePlay,
}) => {
  const [artists, setArtists] = useState([
    {
      name: "Hoodie Allen",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg",
    },
    {
      name: "Mike Stud",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg",
    },
    {
      name: "Drake",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg",
    },
    {
      name: "J. Cole",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg",
    },
    {
      name: "Big Sean",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg",
    },
    {
      name: "Wiz Khalifa",
      type: "Artist",
      picture_big: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg",
    },
    {
      name: "Yonas",
      type: "Artist",
      picture_big:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg",
    },
  ]);
  return (
    <>
      {playlist.length > 0 && (
        <Div className="content__middle">
          <Div className="artist is-verified">
            <Div
              className="artist__header"
              style={{
                backgroundImage: `url(${playlist[0]?.album?.cover_big})`,
              }}
            >
              <Div className="artist__info">
                <Div className="profile__img">
                  <Img src={playlist[0]?.artist?.picture_big} alt="G-Eazy" />
                </Div>

                <Div className="artist__info__meta">
                  <Div className="artist__info__type">
                    {playlist[0]?.artist?.type}
                  </Div>

                  <Div className="artist__info__name">
                    {playlist[0]?.artist?.name}
                  </Div>

                  <Div className="artist__info__actions">
                    <Button onClick={handlePlay} className="button-dark">
                      <IoPlay size={18} />
                      Play
                    </Button>

                    <Button className="button-light">Follow</Button>

                    <Button className="button-light more">
                      <MdOutlineMoreHoriz size={18} />
                    </Button>
                  </Div>
                </Div>
              </Div>

              <Div className="artist__listeners">
                <Div className="artist__listeners__count">15,662,810</Div>

                <Div className="artist__listeners__label">
                  Monthly Listeners
                </Div>
              </Div>

              <Div className="artist__navigation">
                <Ul className="nav nav-tabs" role="tablist">
                  <Li role="presentation" className="active">
                    <A
                      href="#artist-overview"
                      aria-controls="artist-overview"
                      role="tab"
                      data-toggle="tab"
                    >
                      Overview
                    </A>
                  </Li>
                  <Li role="presentation">
                    <A
                      href="#related-artists"
                      aria-controls="related-artists"
                      role="tab"
                      data-toggle="tab"
                    >
                      Related Artists
                    </A>
                  </Li>
                </Ul>
              </Div>
            </Div>

            <Div className="artist__content">
              <Div className="tab-content">
                <Div
                  role="tabpanel"
                  className="tab-pane active"
                  id="artist-overview"
                >
                  <Div className="overview">
                    <Div className="overview__artist">
                      <Div className="section-title">Latest Release</Div>

                      <Div className="latest-release">
                        <Div className="latest-release__art">
                          <Img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                            alt="When It's Dark Out"
                          />
                        </Div>

                        <Div className="latest-release__song">
                          <Div className="latest-release__song__title">
                            Drifting (Track Commentary)
                          </Div>

                          <Div className="latest-release__song__date">
                            <Span className="day">4</Span>

                            <Span className="month">December</Span>

                            <Span className="year">2015</Span>
                          </Div>
                        </Div>
                      </Div>
                      <Div className="section-title">Popular</Div>

                      <Div className="tracks">
                        {playlist.map((item, index) => (
                          <Div
                            className="track"
                            onClick={() => handleTrack(index)}
                            key={index}
                          >
                            <Div className="track__art">
                              <Img
                                src={item.album.cover_big}
                                alt="When It's Dark Out"
                              />
                            </Div>

                            <Div className="track__number">{index + 1}</Div>

                            <Div className="track__added">
                              <i className="ion-checkmark-round added"></i>
                            </Div>

                            <Div className="track__title">{item.title}</Div>

                            <Div className="track__explicit">
                              <Span className="label">Explicit</Span>
                            </Div>
                            {/* from 894651321 to 894,651,321 */}
                            <Div className="track__plays">
                              {item.rank
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Div>
                          </Div>
                        ))}
                      </Div>

                      <Button className="show-more button-light">
                        Show More
                      </Button>
                    </Div>

                    <Div className="overview__related">
                      <Div className="section-title">Related Artists</Div>

                      <Div className="related-artists">
                        {artists.map((item, index) => (
                          <Div
                            onClick={() => fetchPlaylist(item.name)}
                            className="related-artist"
                            key={index}
                          >
                            <Span className="related-artist__img">
                              <Img src={item.picture_big} alt="..." />
                            </Span>

                            <Span className="related-artist__name">
                              {item.name}
                            </Span>
                          </Div>
                        ))}
                      </Div>
                    </Div>

                    <Div className="overview__albums">
                      <Div className="overview__albums__head">
                        <Span className="section-title">Albums</Span>

                        <Span className="view-type">
                          <i className="fa fa-list list active"></i>

                          <i className="fa fa-th-large card"></i>
                        </Span>
                      </Div>

                      <Div className="album">
                        <Div className="album__info">
                          <Div className="album__info__art">
                            <Img
                              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                              alt="When It's Dark Out"
                            />
                          </Div>

                          <Div className="album__info__meta">
                            <Div className="album__year">2015</Div>

                            <Div className="album__name">
                              When It's Dark Out
                            </Div>

                            <Div className="album__actions">
                              <Button className="button-light save">
                                Save
                              </Button>

                              <Button className="button-light more">
                                <i className="ion-ios-more"></i>
                              </Button>
                            </Div>
                          </Div>
                        </Div>

                        <Div className="album__tracks">
                          <Div className="tracks">
                            <Div className="tracks__heading">
                              <Div className="tracks__heading__number">#</Div>

                              <Div className="tracks__heading__title">Song</Div>

                              <Div className="tracks__heading__length">
                                <i className="ion-ios-stopwatch-outline"></i>
                              </Div>

                              <Div className="tracks__heading__popularity">
                                <i className="ion-thumbsup"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">1</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title">Intro</Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">1:11</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">2</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title">Random</Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:00</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">3</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Me, Myself & I</Span>
                                <Span className="feature">Bebe Rexha</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">4:11</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">4</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">One Of Them</Span>
                                <Span className="feature">Big Sean</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:20</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-down-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">5</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Drifting</Span>
                                <Span className="feature">Chris Brown</Span>
                                <Span className="feature">Tory Lanez</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">4:33</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">6</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Of All Things</Span>
                                <Span className="feature">Too $hort</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:34</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">7</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Order More</Span>
                                <Span className="feature">Starrah</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:29</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">8</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title">
                                <Span>Calm Down</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">2:07</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">9</Div>

                              <Div className="track__added">
                                <i className="ion-plus not-added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Don't Let Me Go</Span>
                                <Span className="feature">Grace</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:11</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-down-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">10</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title">
                                <Span>You Got Me</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:28</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">11</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">What If</Span>
                                <Span className="feature">Gizzle</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">4:13</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">12</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title">
                                <Span>Sad Boy</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:23</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">13</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Some Kind Of Drug</Span>
                                <Span className="feature">Marc E. Bassy</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">3:42</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">14</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Think About You</Span>
                                <Span className="feature">Quin</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">2:59</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">15</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">
                                  Everything Will Be OK
                                </Span>
                                <Span className="feature">Kehlani</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">5:11</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">16</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">For This</Span>
                                <Span className="feature">Iamnobodi</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">4:11</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>

                            <Div className="track">
                              <Div className="track__number">17</Div>

                              <Div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </Div>

                              <Div className="track__title featured">
                                <Span className="title">Nothing to Me</Span>
                                <Span className="feature">Keyshia Cole</Span>
                                <Span className="feature">E-40</Span>
                              </Div>

                              <Div className="track__explicit">
                                <Span className="label">Explicit</Span>
                              </Div>

                              <Div className="track__length">5:30</Div>

                              <Div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </Div>
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Div role="tabpanel" className="tab-pane" id="related-artists">
                  <Div className="media-cards">
                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Hoodie Allen</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Mike Stud</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Drake</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">J. Cole</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Big Sean</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Wiz Khalifa</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Yonas</A>
                    </Div>

                    <Div className="media-card">
                      <Div
                        className="media-card__image"
                        style={{
                          backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg)",
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </Div>

                      <A className="media-card__footer">Childish Gambino</A>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
};

export default MiddleContent;
