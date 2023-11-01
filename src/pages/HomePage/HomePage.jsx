import { useState, useEffect } from "react";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";
import { ReactComponent as ComlpletedIcon } from "../../assets/svg/arror-correct.svg";
import { ReactComponent as CLoseIcon } from "../../assets/svg/close.svg";

import Item from "../../components/Item";
import MyList from "../../components/List/MyList";
import { MyItemList } from "../../assets/data/data";

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  const [newLists, setNewList] = useState([]);

  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
      body.classList.add("changeWhite");
    } else {
      html.classList.remove("dark");
      setTheme("light");
      body.classList.remove("changeWhite");
    }
  };

  const newArraylist = (itm) => {
    setNewList((prevS) => ({
      ...prevS,
      item: itm,
    }));
  };

  console.log({ newLists });

  return (
    <>
      <div className="bg-image-1 w-full mx-auto lyt dark:bg-image-2">
        <div className="w-full lg:w-3/5 mx-auto">
          <div className="container flex items-center justify-between pt-[1rem] lg:pt-[3rem]">
            <h1 className="text-[40px] text-white font-semibold tracking-[15px]">
              TODO
            </h1>
            <div className="cursor-pointer">
              {theme === "light" ? (
                <MoonIcon onClick={handleThemeSwitch} />
              ) : (
                <SunIcon onClick={handleThemeSwitch} />
              )}
            </div>
          </div>
          <section className="container mt-[2rem]">
            <Item newArraylist={newArraylist} />
          </section>
        </div>
      </div>

      <div className="-mt-[4rem]">
        <div className="w-full lg:w-3/5 mx-auto">
          <section className="container space-y-1">
            <MyList />
            {newLists?.item?.map(({ activity, active }, idx) => (
              <div
                className="bg-white rounded-lg p-[1rem_2rem] flex items-center justify-between shadow-md"
                key={idx}
              >
                <div className="flex items-center gap-6">
                  {Boolean(active) ? (
                    <div>
                      <div className="relative h-[30px] w-[30px] rounded-full bg-gradient-to-r from-[#ac2debb3] to-[#5596ffb3] items-center dark:bg-gradient-to-r dark:from-[#3710bdb3] dark:to-[#a42395b3]">
                        <ComlpletedIcon className="w-[60px] h-[60px] absolute top-[35%] left-[35%]" />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="h-[30px] w-[30px] rounded-full border-2 border-gray-300 "></p>
                    </div>
                  )}

                  <div>{activity}</div>
                </div>
                <div>
                  <CLoseIcon className="scale-150 cursor-pointer" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="w-full lg:w-3/5 mx-auto mb-[2rem]">
        <section className="container">
          <div className="bg-white rounded-lg p-[1rem_2rem] shadow-md flex items-center justify-evenly">
            <div>
              <p className="text-sm font-thin text-gray-800">{`${
                newLists?.item?.length ?? "no"
              } items left`}</p>
            </div>
            <div>
              <p className="cursor-pointer">All</p>
            </div>
            <div>
              <p className="cursor-pointer">Active</p>
            </div>
            <div>
              <p className="cursor-pointer">Completed</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
