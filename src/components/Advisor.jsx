import React from "react";
import hand from "../assets/images/svg/hand.svg";
import person from "../assets/images/svg/person.svg";
import saving from "../assets/images/svg/saving.svg";
import employ from "../assets/images/svg/employ.svg";
import risk from "../assets/images/svg/risk.svg"
const carddata1 = [
  {
    img: hand,
    head: "Financial Goals",
    para: "What are you investing for? Retirement, a house, education?",
  },
  {
    img: person,
    head: "Personal Details",
    para: "Your age, family situation, and other pertinent factors.",
  },
];
const carddata2 = [
    {
        img :employ,
        head:"Employment",
        para:"Your job stability, income, and future career plans."
    },
    {
        img:risk,
        head:"Risk Tolerance",
        para:"How comfortable are you with the ups and downs of the market?"
    }
]
const Advisor = () => {
  const card1 = carddata1.map((data, i) => (
    <div className="w-1/2 px-3" key={i}>
      <div className="w-full h-[304px] bg-[#1811344D] rounded-3xl border-2 border-solid border-[#AB68FF4D] p-[25px_35px_0_20px] backdrop-blur-lg relative after:w-[388.57px] after:h-[43px] after:absolute after:bg-[#AB68FF] after:opacity-20 after:-rotate-[48.99deg] overflow-hidden z-[1] after:z-[-1] after:top-[43%] after:blur-[25.7px] after:left-[-23%] ">
        <div className="rounded-full bg-[#AB68FF] w-[60px] h-[60px] shadow-[0px_0px_6px_0px_#AB68FF99] mb-6 flex justify-center items-center">
          <img src={data.img} alt="icon" />
        </div>
        <h3 className=" font-Inter text-base font-semibold leading-[19.36px] text-white mb-[14px]">
          {data.head}
        </h3>
        <p className=" text-white opacity-70 text-base font-Inter font-normal">
          {data.para}
        </p>
      </div>
    </div>
  ));
  const card2 = carddata2.map((data, i) => (
    <div className="w-1/2 px-3" key={i}>
      <div className="w-full h-[304px] bg-[#1811344D] rounded-3xl border-2 border-solid border-[#AB68FF4D] p-[25px_35px_0_20px] backdrop-blur-lg relative after:w-[388.57px] after:h-[43px] after:absolute after:bg-[#AB68FF] after:opacity-20 after:-rotate-[48.99deg] overflow-hidden z-[1] after:z-[-1] after:top-[43%] after:blur-[25.7px] after:left-[-23%] ">
        <div className="rounded-full bg-[#AB68FF] w-[60px] h-[60px] shadow-[0px_0px_6px_0px_#AB68FF99] mb-6 flex justify-center items-center">
          <img src={data.img} alt="icon" />
        </div>
        <h3 className=" font-Inter text-base font-semibold leading-[19.36px] text-white mb-[14px]">
          {data.head}
        </h3>
        <p className=" text-white opacity-70 text-base font-Inter font-normal">
          {data.para}
        </p>
      </div>
    </div>
  ));
  return (
    <div className=" pt-[212px] pb-6">
      <div className=" container max-w-[1164px] 2xl:max-w-[1320px] mx-auto px-3">
        <h1 className=" font-Inter text-white text-[40px] text-center leading-[48.41px] font-bold pb-[60px]">
          Your Personal{" "}
          <span className=" font-extrabold text-[#AB68FF]">
            Investment Advisor
          </span>
        </h1>
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className=" lg:w-1/2 w-full px-3 mb-6">
            <div className=" flex flex-wrap flex-row -mx-3">{card1}</div>
          </div>
          <div className="lg:w-1/2 w-full px-3 mb-6">
            <h2 className=" text-white font-inter text-2xl font-bold leading-[36px] pb-4">
              InvestGPT begins by asking you a series of questions. These
              questions cover a range of topics, including:
            </h2>
            <p className=" font-Inter text-white text-base font-normal opacity-70">
              InvestGPT is your trusted companion in the world of finance. By
              understanding your unique financial situation and goals, InvestGPT
              provides tailored advice and insights to help you make informed
              investment decisions.
            </p>
          </div>
          <div className="w-1/2 px-3">
            <div className="w-full bg-[#1811344D] h-[304px] border-2 border-solid border-[#AB68FF4D] rounded-3xl backdrop-blur-lg p-[24px_20px_0] after:w-[620.13px] after:absolute relative z-[1] after:z-[-1] after:h-[43px] after:bg-[#AB68FF] after:-rotate-[26.57deg] after:opacity-20 after:top-[42%] after:left-[-6%] after:blur-[26.7px] overflow-hidden">
              <div className="rounded-full bg-[#AB68FF] w-[60px] h-[60px] shadow-[0px_0px_6px_0px_#AB68FF99] mb-6 flex justify-center items-center">
                <img src={saving} alt="icon" />
              </div>
              <h3 className=" font-Inter text-base font-semibold leading-[19.36px] text-white pb-[14px]">
                Current Savings and Investments
              </h3>
              <p className=" font-Inter text-base font-normal text-white opacity-70 mb-2.5">
                How would you describe your rish tolerance when it comes to
                investing?(e.g., conservative, moderate, aggressive)
              </p>
              <p className=" font-Inter text-base font-normal text-white opacity-70">
                What percentage of your investment portfolio are you comfortable
                with potentially losing during a market downturn?
              </p>
            </div>
          </div>
          <div className="w-1/2 px-3">
<div className="flex flex-wrap flex-row -mx-3">
{card2}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
