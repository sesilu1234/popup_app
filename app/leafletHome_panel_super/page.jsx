// page.tsx
'use client';
import React from 'react';
import { MapProvider } from './MapContext';

import dynamic from 'next/dynamic';
import GooglePlacesSearch from './GooglePlacesSearch';
import JamCarousel from './jamsCarousel';
import { Input } from '@/components/ui/input';

const MapRender = dynamic(() => import('./MapRender'), { ssr: false });

export default function Home() {
  return (
    <MapProvider>
      <div className="flex flex-col w-[1300px] max-w-[90%] mx-auto p-6 ">
        <div className="inline-block">
          <div className="ml-3 flex gap-2 items-end">
            <img src="jamspots_icon.png" alt="Jamspots icon" className="h-16" />
            <p className="text-xs py-3 text-gray-600 font-semibold">
              Find the next spot to share your sound.
            </p>
          </div>

          <div className="h-[1.5px] bg-gray-700/50 w-96 mt-1"></div>
        </div>

        <div className="flex items-center my-4 ml-3 gap-2">
          <Input
            className="w-72 h-10 px-3 text-sm text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search jams, bars, venues…"
          />

          <div className="w-52 ">
            <GooglePlacesSearch />
          </div>
        </div>

        <div className="ml-3 font-semibold uppercase text-gray-800 tracking-wide">
          13 jams found
        </div>

        <div className="relative w-full mx-auto mt-4 h-148 rounded-sm border border-gray-500/70 shadow-md overflow-hidden">
          <MapRender />
          <JamCarousel />
        </div>
      </div>
    </MapProvider>
  );
}
