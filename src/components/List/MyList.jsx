import { ReactComponent as CLoseIcon } from "../../assets/svg/close.svg";
import { ReactComponent as ComlpletedIcon } from "../../assets/svg/arror-correct.svg";
import { MyItemList } from "../../assets/data/data";

const MyList = () => {
  return (
    <>
      {MyItemList.map(({ activity, active }, idx) => (
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
    </>
  );
};

export default MyList;
