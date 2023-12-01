import { useState } from "react";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";
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

    setActivityValue("");
  };

  const handleDelete = (my_id) => {
    const itemsLeft = newLists.filter(({ id }) => id !== my_id);
    setNewList(itemsLeft);
  };

  const myClick = (my_id, active) => {
    const index = newLists.findIndex(({ id }) => id === my_id);
    if (index >= 0) {
      active
        ? setNewList((prevS) => {
            prevS.splice(index, 1, { ...prevS[index], active: false });
            return [...prevS];
          })
        : setNewList((prevS) => {
            prevS.splice(index, 1, { ...prevS[index], active: true });
            return [...prevS];
          });
    }
  };

  const myActions = (all, active, completed) => {};

  return (
    <>
      <div className="bg-image-1 w-full mx-auto lyt dark:bg-image-2">
        <div className="w-full lg:w-3/5 mx-auto">
          <div className="container flex items-center justify-between pt-[1rem] lg:pt-[3rem]">
            <h1 className="text-[40px] text-white font-semibold tracking-[15px]">
              PAXIPAY
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
                {console.log({ active })}
                <TodoItem
                  active={active}
                  activity={activity}
                  handleDelete={() => handleDelete(id)}
                  handleActive={() => myClick(id, active)}
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
                newLists?.length ?? "no"
              } items left`}</p>
            </div>
            <div>
              <button className="cursor-pointer">All</button>
            </div>
            <div>
              <button className="cursor-pointer">Active</button>
            </div>
            <div>
              <button className="cursor-pointer">Completed</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
