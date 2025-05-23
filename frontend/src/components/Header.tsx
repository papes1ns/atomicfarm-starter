import React from "react";
import {versionInfo} from "../App";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <small>version {versionInfo}</small>
      </div>
    </header>
  );
};
