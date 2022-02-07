import React from "react";

interface NotFoundProps {
  notFoundMessage: string;
  color: string;
}

export const NotFound: React.FC<NotFoundProps> = props => {
  return (
    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
      <br className="xl:hidden" />{" "}
      <a
        target="_blank"
        className={`text-${props.color}-600 hover:text-${props.color}-500`}
      >
        {props.notFoundMessage}
      </a>
    </h2>
  );
};
