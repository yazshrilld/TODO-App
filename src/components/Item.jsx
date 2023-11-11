import { useState } from "react";
import { MyItemList } from "../assets/data/data";
import { ReactComponent as SubmitIcon } from "../assets/svg/arror-correct.svg";

const Item = ({ newArraylist }) => {
  const [item, setItem] = useState([]);
  const [activityValue, setActivityValue] = useState("")

  const handleClick = () => {
    setItem((prevS) => [
      ...prevS,
      {
        activity: activityValue,
        active: false,
      },
    ]);
    newArraylist(item)
  };

  return (
    <>
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
          <div className="relative h-[30px] w-[30px] rounded-full bg-gradient-to-r from-[#ac2debb3] to-[#5596ffb3] items-center dark:bg-gradient-to-r dark:from-[#3710bdb3] dark:to-[#a42395b3]">
            <SubmitIcon
              className="w-[60px] h-[60px] absolute top-[35%] left-[32%] cursor-pointer"
              onClick={handleClick}
            />
            {
              console.log("From return of Item: ", item)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
