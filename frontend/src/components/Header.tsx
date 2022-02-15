import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<Props> = ({title, subtitle}) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-uf-maroon">
          {title}
        </h1>
        {subtitle && (
          <h1 className="text-xl leading-tight text-uf-gray">{subtitle}</h1>
        )}
      </div>
    </header>
  );
};
