import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-full col-span-1 px-4 py-6 mx-auto border shadow-lg rounded-xl border-slate-200">
      <div className="flex space-x-4 animate-pulse">
        <div className="flex-1 py-1 space-y-6">
          <div className="h-4 rounded-lg bg-slate-200"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 col-span-2 rounded-lg bg-slate-200"></div>
              <div className="h-4 col-span-1 rounded-lg bg-slate-200"></div>
            </div>
            <div className="h-4 rounded-lg bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
