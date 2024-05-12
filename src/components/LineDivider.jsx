import React from "react";

const LineDivider = () => {
  return (
    <div className="flex items-center justify-center bg-color4">
      <div className="h-0.5 bg-gray-500 w-1/2 relative">

        <div className="absolute inset-y-0 left-0 flex items-center justify-center">
          <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
        </div>
              
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-10 flex items-center justify-center">
          <div className="h-4 w-4 bg-gray-500 rounded-full"></div>
        </div>

        <div className="absolute inset-y-0 left-1/2 transform -translate-x-7 flex items-center justify-center">
          <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
        </div>

        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1 flex items-center justify-center">
          <div className="h-8 w-8 bg-gray-500 rounded-full"></div>
        </div>

        <div className="absolute inset-y-0 left-1/2 transform translate-x-7 flex items-center justify-center">
          <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
        </div>

        <div className="absolute inset-y-0 left-1/2 transform translate-x-12 flex items-center justify-center">
          <div className="h-4 w-4 bg-gray-500 rounded-full"></div>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center justify-center">
          <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default LineDivider;
