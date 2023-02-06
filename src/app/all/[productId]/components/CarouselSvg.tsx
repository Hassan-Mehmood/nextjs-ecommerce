import React from "react";
interface propsInterface {
  arrowColor: string;
  pathName: string;
}

export const CarouselSvg = (props:propsInterface) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-9 h-9 lg:w-6 lg:h-6 ${props.arrowColor}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`${props.pathName}`}
        />
      </svg>
  );

//   text-gray-400

//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-9 h-9 lg:w-6 lg:h-6 text-gray-400"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M8.25 4.5l7.5 7.5-7.5 7.5"
//     />
//   </svg>;
};
