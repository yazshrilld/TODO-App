import { useState, useEffect } from "react";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";
import { v4 as uuid } from "uuid";
import TodoItem from "../../components/TodoItem";

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  const [newLists, setNewList] = useState([]);
  const [activityValue, setActivityValue] = useState("");

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

  const handleClick = (e) => {
    e.preventDefault();
    setNewList((prevS) => [
      ...prevS,
      {
        id: crypto.randomUUID(),
        activity: activityValue,
        active: false,
      },
    ]);
  };

  const handleDelete = (my_id) => {
    const index  = newLists.findIndex(({id}) => id === my_id )
    console.log({index})

    const itemsLeft = newLists.filter(({id}) => id !== my_id )
    setNewList(itemsLeft)
  };

  console.log("Before Return: ", newLists);

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
            <form onSubmit={handleClick}>
              <div className="bg-white rounded-lg p-[1rem_2rem] flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="h-[30px] w-[30px] rounded-full border-2 border-gray-300 bg-white"></p>
                  </div>
                  <div>
                    <input
                      className="p-[10px] border-none outline-none bg-transparent"
                      type="text"
                      name=""
                      placeholder="Create a new todo..."
                      onChange={(e) => setActivityValue(e.target.value)}
                      value={activityValue}
                    />
                  </div>
                  <button type="submit"></button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <div className="-mt-[4rem]">
        <div className="w-full lg:w-3/5 mx-auto">
          <section className="container space-y-1">
            {newLists?.map(({ activity, active, id }, idx) => (
              <div
                className="bg-white rounded-lg p-[1rem_2rem] flex items-center justify-between shadow-md"
                key={idx}
              >
                <TodoItem
                  active={active}
                  activity={activity}
                  handleDelete={() => handleDelete(id)}
                />
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
