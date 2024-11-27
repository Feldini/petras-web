import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import PayMe from "./(components)/PayMe";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaChartLine,
  FaNewspaper,
  FaCode,
  FaChartArea,
  FaLaptop,
  FaRobot,
  FaShoppingCart,
} from "react-icons/fa";

import { items, tagline } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <Avatar />
          <div className="text-2xl font-semibold">
            <a href="https://x.com/philippetras">@philippetras</a>
          </div>

          <div className="text-zinc-500 flex justify-between gap-5">
            {tagline.map((item, index) => (
              <div
                className="text-zinc-500 text-sm text-center font-thin"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <PayMe />

        <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
          <Card
            title={items.twitter.title}
            icon={<FaTwitter />}
            url={items.twitter.url}
          />
        </div>
      </div>
    </>
  );
}
