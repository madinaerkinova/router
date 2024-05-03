import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Logo from "../public/logo.svg";
import Overview from "../public/overview.svg";
import Tickets from "../public/tickets.svg";
import Ideas from "../public/ideas.svg";
import Contacts from "../public/contacts.svg";
import Agents from "../public/agents.svg";
import Articles from "../public/articles.svg";
import Settings from "../public/settings.svg";
import Subscription from "../public/subscription.svg";
import Search from "../public/search.svg";
import Notification from "../public/notification.svg";
import MainPerson from "../public/headerPerson.png";
import Sort from "../public/sort.svg";
import Filter from "../public/filter.svg";
import About from "./components/About";
import Bottom from "../public/bottom.svg";
import Left from "../public/left.svg";

import One from "../public/one.png";
import Two from "../public/two.png";
import Three from "../public/three.png";
import Four from "../public/four.png";
import Five from "../public/five.png";
import Six from "../public/six.png";
import Seven from "../public/seven.png";
import Eight from "../public/eight.png";

const App = () => {
  return (
    <>
      <div className="flex h-[1100px]">
        <div className="w-[255px] bg-[#363740]">
          <div className="mb-14 flex cursor-pointer items-center gap-3 px-8 pt-9">
            <img src={Logo} alt="Site Logo" />
            <p className="text-[19px] font-bold text-[#A4A6B3]">
              Dashboard Kit
            </p>
          </div>
          <div className="mb-4">
            <ul>
              <li className="h-14">
                <NavLink className="flex items-center gap-6">
                  <img src={Overview} alt="Icon" /> <p>Overview</p>
                </NavLink>
              </li>
              <li className="h-14 bg-[#3E3F49]">
                <NavLink className="flex items-center gap-6">
                  <img src={Tickets} alt="Icon" />
                  <p className="text-[#DDE2FF]">Tickets</p>
                </NavLink>
              </li>
              <li className="h-14">
                <NavLink className="flex items-center gap-6">
                  <img src={Ideas} alt="Icon" /> <p>Ideas</p>
                </NavLink>
              </li>
              <li className="h-14">
                <NavLink className="flex items-center gap-6">
                  <img src={Contacts} alt="Icon" /> <p>Contacts</p>
                </NavLink>
              </li>
              <li className="h-14">
                <NavLink className="flex items-center gap-6">
                  <img src={Agents} alt="Icon" /> <p>Agents</p>
                </NavLink>
              </li>
              <li className="h-14">
                <NavLink className="flex items-center gap-6">
                  <img src={Articles} alt="Icon" /> <p>Articles</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="mb-4 h-[1px] border-none bg-[#5f6060]" />
          <ul className="">
            <li className="h-14">
              <NavLink className="flex gap-6">
                <img src={Settings} alt="Icon" /> <p>Settings</p>
              </NavLink>
            </li>
            <li className="h-14">
              <NavLink className="flex gap-6">
                <img src={Subscription} alt="Icon" /> <p>Subscription</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-[83%] bg-[#F7F8FC]">
          <div className="mb-7 flex items-center justify-between px-8 pt-9">
            <div>
              <p className="text-2xl font-bold text-[#252733]">Tickets</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-6">
                <img
                  className="cursor-pointer transform hover:scale-110"
                  src={Search}
                  alt="Search Icon"
                />
                <img
                  className="cursor-pointer transform hover:scale-110"
                  src={Notification}
                  alt="Notification Icon"
                />
              </div>
              <hr className="h-[1px] w-8 rotate-90 bg-[#DFE0EB] px-8" />
              <div className="flex cursor-pointer items-center gap-3 transform hover:rotate-360">
                <p className="text-[14px] font-semibold text-[#252733]">
                  Jones Ferdinand
                </p>
                <div className="rounded-full border-[2px] border-[#DFE0EB] p-[2px]">
                  <img
                    className="h-11 w-11 rounded-full"
                    src={MainPerson}
                    alt="User Img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-8 rounded-lg border border-[#DFE0EB] bg-white pt-8">
            <div className="mb-12 flex justify-between px-8">
              <p className="text-[19px] font-bold text-[#252733]">
                All tickets
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-2 transform hover:scale-110">
                  <img src={Sort} alt="Sort Icon" />{" "}
                  <p className="text-[14px] font-semibold text-[#4B506D]">
                    Sort
                  </p>
                </div>
                <div className="flex items-center gap-2 transform hover:scale-110">
                  <img src={Filter} alt="Filter Icon" />
                  <p className="text-[14px] font-semibold text-[#4B506D]">
                    Filter
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3 flex justify-between px-8">
                <p className="w-[440px] text-[14px] font-bold text-[#9FA2B4]">
                  Ticket details
                </p>
                <p className="w-[208px] text-[14px] font-bold text-[#9FA2B4]">
                  Customer name
                </p>
                <p className="w-[140px] text-[14px] font-bold text-[#9FA2B4]">
                  Date
                </p>
                <p className="w-[104px] text-[14px] font-bold text-[#9FA2B4]">
                  Priority
                </p>
              </div>
              <hr className="h-[1.5px] bg-[#DFE0EB]" />
              <div>
                <About
                  image={One}
                  desc="Contact Email not Linked"
                  day="Updated 1 day ago"
                  name="Tom Cruise"
                  date="on 24.05.2019"
                  anotherDate="May 26, 2019"
                  time="6:30 PM"
                  level="HIGH"
                  bgColor="#F12B2C"
                  width="54px"
                />
                <About
                  image={Two}
                  desc="Adding Images to Featured Posts"
                  day="Updated 1 day ago"
                  name="Matt Damon"
                  date="on 24.05.2019"
                  anotherDate="May 26, 2019"
                  time="8:00 PM"
                  level="LOW"
                  bgColor="#FEC400"
                  width="54px"
                />
                <About
                  image={Three}
                  desc="When will I be charged this month?"
                  day="Updated 1 day ago"
                  name="Robert Downey"
                  date="on 24.05.2019"
                  anotherDate="May 26, 2019"
                  time="7:30 PM"
                  level="HIGH"
                  bgColor="#F12B2C"
                  width="54px"
                />
                <About
                  image={Four}
                  desc="Payment not going through"
                  day="Updated 2 day ago"
                  name="Christian Bale"
                  date="on 24.05.2019"
                  anotherDate="May 25, 2019"
                  time="5:00 PM"
                  level="NORMAL"
                  bgColor="#29CC97"
                  width="76px"
                />
                <About
                  image={Five}
                  desc="Unable to add replies"
                  day="Updated 2 day ago"
                  name="Henry Cavil"
                  date="on 24.05.2019"
                  anotherDate="May 25, 2019"
                  time="4:00 PM"
                  level="HIGH"
                  bgColor="#F12B2C"
                  width="54px"
                  bg="#F7F8FF"
                />
                <About
                  image={Six}
                  desc="Downtime since last week"
                  day="Updated 3 day ago"
                  name="Chris Evans"
                  date="on 23.05.2019"
                  anotherDate="May 25, 2019"
                  time="2:00 PM"
                  level="NORMAL"
                  bgColor="#29CC97"
                  width="76px"
                />
                <About
                  image={Seven}
                  desc="Referral Bonus"
                  day="Updated 4 day ago"
                  name="Sam Smith"
                  date="on 22.05.2019"
                  anotherDate="May 26, 2019"
                  time="11:30 PM"
                  level="LOW"
                  bgColor="#FEC400"
                  width="54px"
                />
                <About
                  image={Eight}
                  desc="How do I change my password?"
                  day="Updated 6 day ago"
                  name="How do I change my password?"
                  date="on 21.05.2019"
                  anotherDate="May 25+4, 2019"
                  time="1:00 PM"
                  level="NORMAL"
                  bgColor="#29CC97"
                  width="76px"
                />
              </div>
              <div className="flex justify-end h-[72px] gap-12 pr-8 right-8">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal text-[#9FA2B4]">
                    Rows per page:
                  </p>
                  <div className="flex gap-1">
                    <p className="text-[14px] font-normal text-[#4B506D]">8</p>
                    <img
                      className="cursor-pointer transform hover:scale-110"
                      src={Bottom}
                      alt="Arrow Img"
                    />
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <p className="text-[14px] font-normal text-[#9FA2B4]">
                    1-8 of 1240
                  </p>
                  <div className="flex gap-3">
                    <img
                      className="cursor-pointer transform hover:scale-110"
                      src={Left}
                      alt="Left Arrow"
                    />
                    <img
                      className="cursor-pointer rotate-180 transform hover:scale-110"
                      src={Left}
                      alt="Left Arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
