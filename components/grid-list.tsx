import React from 'react'
import Image from "next/image";

const GridList = () => {
  const sampleData = [
    {
        url: '/images/unicorn.svg',
        name: 'Unicorn',
    },
    {
        url: '/images/pirateboat.svg',
        name: 'Pirate boat',
    },
    {
        url: '/images/flowers.svg',
        name: 'Bouquet of flowers',
    },
    {
        url: '/images/helmet.svg',
        name: 'Football helmet',
    },
    {
        url: '/images/gnome.svg',
        name: 'Gnome',
    },
    {
        url: '/images/lama.svg',
        name: 'Llama',
    },
    {
        url: '/images/truck.svg',
        name: 'Truck',
    },
    {
        url: '/images/flames.svg',
        name: 'Flames',
    },
    {
        url: '/images/pumpkin.svg',
        name: 'Pumpkin',
    },
    {
        url: '/images/weather.svg',
        name: 'Weather',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {sampleData.map((data, index) => (
        <div key={index} className="flex flex-col gap-3 items-center">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-2xl shadow-xl relative">
              <Image src={data.url} fill alt="generated svg" />
            </div>
            <div className="flex flex-col gap-1 items-center">
            <p className="text-xs">Text prompt:</p>
            <h4 className="font-semibold">{data.name}</h4>
            </div>
        </div>
      ))}
      
    </div>
  )
}

export default GridList