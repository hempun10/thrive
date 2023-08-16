import React from "react";
import { Button } from "./ui/button";
import { BiRightDownArrowCircle } from "react-icons/bi";

const HowWeWork = () => {
  return (
    <div className=" how_we_work max-w-7xl bg-BtnColor text-white px-6 py-[4rem]">
      <div className="how_we_work_text_content flex justify-center items-center">
        <div className="how_we_work_text flex flex-col gap-7 flex-1">
          <h2 className=" text-[3.5rem]  leading-[3.7rem] text-primary font-[500]">
            Design, build, and scale your <br /> vision
          </h2>
          <p className=" font-sans w-[60%] text-xl">
            We’re ready to be your secret digital weapon. And we’re flexible.
            Work with just our developers or designers, or partner with us along
            your entire digital journey.
          </p>
        </div>
        <div className="how_we_work_btn">
          <Button className=" font-sans bg-white rounded-full text-CustomBlue flex gap-2 hover:gap-3 transition-all hover:bg-stone-50">
            Know More <BiRightDownArrowCircle size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
