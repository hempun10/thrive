import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { CustomAvtar } from "./shared/CustomAvtar";

interface Props {
  testominalText: string;
  imageUrl: string;
  name: string;
  position: string;
  companyName: string;
}
const Testominal = ({
  testominalText,
  imageUrl,
  name,
  position,
  companyName,
}: Props) => {
  return (
    <div className=" testominal max-w-7xl m-auto sm:p-9">
      <div className="testominal_items flex flex-col gap-10">
        <p className=" relative">
          <BiSolidQuoteAltLeft size={200} className=" opacity-5" />
          <span className="testominal_text ">“{testominalText}”</span>
        </p>
        <CustomAvtar
          imageUrl={imageUrl}
          name={name}
          position={position}
          companyName={companyName}
        />
      </div>
    </div>
  );
};

export default Testominal;
