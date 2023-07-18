import * as React from "react";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const CustomButtonGroupAsArrows = ({
  next,
  previous,
  data,
}: {
  next: any;
  previous: any;
  data: any;
}) => {
  const [hidden, setHidden] = useState("");

  useEffect(() => {
    setHidden(data.length <= 3 ? "text-transparent" : "");
  }, [data]);

  return (
    <div className={`text-end px-2 py-3 md:px-8 md:pt-5 ${hidden} `}>
      <button onClick={previous} className="mr-4">
        <MdArrowBackIosNew />
      </button>
      <button onClick={next} className="">
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export { CustomButtonGroupAsArrows };
