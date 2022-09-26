import React from "react";

const SectionTitle: React.FC<{
  prefix: React.ReactNode;
  focus: React.ReactNode;
  subtitle: React.ReactNode;
}> = ({ prefix, focus, subtitle }) => {
  return (
    <div className="w-ful flex items-center justify-center flex-col py-16 text-gray-300">
      <h1 className="text-7xl uppercase font-bold">
        {prefix} <span className="text-indigo-500">{focus}</span>
      </h1>
      <p className="mt-5 flex items-center justify-center">
        <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
        <span className="mx-4 inline-block uppercase">{subtitle}</span>
        <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
      </p>
    </div>
  );
};

export default SectionTitle;
