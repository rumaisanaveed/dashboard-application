import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Stacked, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center lg:flex-row">
        <div className="flex flex-col w-full">
          <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white dark:text-gray-700 hover:drop-shadow-xl rounded-full p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className="mt-6">
              <Button
                color=""
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
              />
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Savings</p>
                <p className="text-2xl">$75,448.78</p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white dark:text-gray-700 hover:drop-shadow-xl rounded-full  p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className="mt-6">
              <Button
                color=""
                bgColor={currentColor}
                text="View Sheet"
                borderRadius="10px"
              />
            </div>
          </div>
        </div>

        {/* revenue chart */}
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <FaCircle />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <FaCircle />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap lg:flex-nowrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-400 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-xl font-semibold">$48,438</span>
                  </p>
                  <p className="text-gray-400 mt-1">Expense</p>
                </div>

                <div className="mt-5">
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>

                <div className="mt-10">
                  <Button
                    // color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>

              <div>
                <Stacked width="320px" height="360px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* boxes */}
      <div className="flex m-3 flex-wrap justify-center gap-10 items-center mt-12">
        {earningData.map((item) => (
          <div
            key={item.title}
            className=" bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
