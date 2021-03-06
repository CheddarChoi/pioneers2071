import React, { Component } from "react";
import ProfileUi from "./ProfileUi";

import Subin from "../images/profiles/Subin.jpeg";
import Jaewook from "../images/profiles/Jaewook.jpeg";
import Chaeyoun from "../images/profiles/Chaeyoun.jpeg";
import Hojung from "../images/profiles/Hojung.jpeg";
import Mingyu from "../images/profiles/Mingyu.jpeg";
import Jiheon from "../images/profiles/Jiheon.jpeg";
import Yoonho from "../images/profiles/Yoonho.jpeg";
import Jisung from "../images/profiles/Jisung.jpeg";
import Yooseung from "../images/profiles/Yooseung.jpeg";
import Daeun from "../images/profiles/Daeun.jpeg";
import Seonghwan from "../images/profiles/Seonghwan.jpeg";
import Kyungbin from "../images/profiles/Kyungbin.jpeg";

import Moon from "../images/profiles/Moon.jpeg";
import Sukyoung from "../images/profiles/Sukyoung.jpeg";
import Seunghyup from "../images/profiles/Seunghyup.jpeg";
import Shin from "../images/profiles/Shin.png";

class Team extends Component {
  render() {
    return (
      <div className="main-background">
        <div className="container mb-5">
          <div className="page-title-small">Team</div>
          <div className="category-title-center">
            Students in Planning Committee
          </div>
          <div class="row justify-content-md-center mb-5">
            <div class="col">
              <ProfileUi
                imgUrl={Kyungbin}
                name="Kyungbin Koh"
                designation="Head of the Committee"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Chaeyoun}
                name="Chaeyoun Kim"
                designation="Scenario Team<br/>Multimedia Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Seonghwan}
                name="Seonghwan Seo"
                designation="Executive Secretary"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Subin}
                name="Subeen Lee"
                designation="Planning Team<br/>Design Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Yoonho}
                name="Yoonho Lee"
                designation="Scenario Team<br/>Multimedia Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Jaewook}
                name="Jaewook Lee"
                designation="Scenario Team<br/>Debate Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Mingyu}
                name="Mingyu Jo"
                designation="Leader of<br/>General Affairs"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Hojung}
                name="Hojung Cho"
                designation="Leader of<br/>Multimedia Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Daeun}
                name="DaEun Choi"
                designation="Leader of<br/>Design·Website Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Jiheon}
                name="Jiheon Choi"
                designation="Leader of<br/>Planning Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Yooseung}
                name="Youseung Hong"
                designation="Leader of<br/>PR Team"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Jisung}
                name="Jisung Hwang"
                designation="Leader of<br/>Scenario Team"
              />
            </div>
          </div>
          <div className="category-title-center">
            Professors in Planning Committee
          </div>
          <div className="category-title-center-guide">
            The professors worked with the students on the overall planning of
            the conference. They gave us advice on details from setting the
            overall direction of the conference.
          </div>
          <div class="row justify-content-md-center mb-5">
            <div class="col">
              <ProfileUi
                imgUrl={Sukyoung}
                name="Sukyoung Ryu"
                designation="Associate Vice President of<br/>Student Life"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Seunghyup}
                name="Seunghyup Yoo"
                designation="Association Vice President of<br/>Student Affairs & Policy"
              />
            </div>
          </div>
          <div className="category-title-center">Professors (Advisors)</div>
          <div className="category-title-center-guide">
            The professors left a number of tips on planning the conference.
            They also gave us advice on a number of things to consider when
            writing the scenarios.
          </div>
          <div class="row justify-content-md-center mb-5">
            <div class="col">
              <ProfileUi
                imgUrl={Moon}
                name="Moon Choi"
                designation="Associate Professor of the<br/>Graduate School of Science<br/>and Technology Policy"
              />
            </div>
            <div class="col">
              <ProfileUi
                imgUrl={Shin}
                name="Shin Yoo"
                designation="Associate Professor of the<br/>School of Computing"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
