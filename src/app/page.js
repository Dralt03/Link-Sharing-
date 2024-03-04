"use client";
import Image from "next/image";
import Link from "./Link";
import { useState} from "react";
import ScreenLink from "./ScreenLink";

export default function Home() {
  const [show, setshow] = useState(false);
  const [links, setLinks] = useState([{
    id: 1,
    platform: "",
    link: "",
  }]);

  // {
  //   platform:"",
  //   link:""
  // }
  function OnRemove(id){
    setLinks(links.filter((link) => link.id !== id))
  }

  const handleClick = () => {
    setshow(true);
    if(links.length+1 <= 4 && links.length>=1){
      setLinks([
        ...links,
        {
          id: links[links.length-1].id+1,
          platform: "",
          link: "",
        }
      ])
    } else {
      setLinks([
        {
          id:1,
          platform:"",
          link:""
        }
      ])
    }
  }

  // const updateLink(id){
  //   setLinks()
  // }

  return (
    <>
      <header>
        <nav>
          <ul className="flex w-full pr-2 pl-2 justify-between">
            <li className="font-bold font-mono text-lg p-3 flex-none">
              Devlinks
            </li>
            <li className="flex justify-between m-2">
              <button className="focus:bg-violet-200  focus:text-violet-800 hover:bg-violet-200 pl-2 pr-2 mr-4 rounded-md">
                Links
              </button>
              <button className="focus:bg-violet-200  focus:text-violet-800 hover:bg-violet-200 pl-2 pr-2 rounded-md">
                Profile Details
              </button>
            </li>
            <li className="flex content-center justify-center">
              <button className="border-2 pl-2 pr-2 m-2 text-violet-600 font-semibold hover:bg-violet-100 focus:bg-violet-100 border-violet-500 rounded-xl">
                Preview
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex justify-around content-center mt-52 w-screen">
        <div className="flex max-md:hidden">
          <Image
            className="absolute w-auto h-auto"
            src={"/phone.png"}
            width={300}
            height={300}
            alt="phone"
          />
          <div className="flex w-full flex-col justify-start">
            <div className="flex flex-col justify-center relative w-96">
              <div className="w-20 h-20 mt-14 bg-gray-300 m-10 rounded-full"></div>
              <div className="w-56 h-5 bg-gray-300 ml-14  rounded-full"></div>
              <div className="w-40 h-5 bg-gray-300 ml-20 mt-4  rounded-full"></div>
              <ScreenLink />
            </div>
          </div>
        </div>
        <div className="funtional-part md:ml-20 flex flex-wrap flex-col justify-between">
          <div>
            <h1 className="text-5xl flex font-bold font-sans">
              Customize Your Links
            </h1>
            <p className="pt-5 text-wrap text-slate-700">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button
              onClick={handleClick}
              className="min-w-full hover:bg-violet-200 text-violet-700 border-2 rounded-lg p-3 border-violet-500 mt-10"
            >
              {" "}
              + Add Link
            </button>
          </div>
          {show ? (
            links.map((item, index) => (
              <div>
                <Link
                  count={item.id}
                  OnRemove={OnRemove}
                  key={index}
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
