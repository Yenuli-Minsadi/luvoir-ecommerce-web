import React from 'react'

const BottomBanner = () => {
  return (
    <div className="relative mt-24 pt-15">
      <div className="absolute inset-0 flex flex-col items-start md:items-start justify-center md:justify-center pb-170 pt-4 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-pink-950 text-4xl md:text-6xl font-bold mb-8 text-center pb-150 pl-10">
          Customize Your Eternity
        </h1>
      </div>
      <img
        src="https://i.pinimg.com/1200x/54/8f/10/548f10ad9fe40f0214086ee4b0dc6dd3.jpg"
        alt="banner"
        className="w-full hidden md:block"
      />
    </div>
  );
}

export default BottomBanner