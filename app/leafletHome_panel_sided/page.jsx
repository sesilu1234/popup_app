// page.tsx
'use client';
import React from 'react';
import { MapProvider } from './MapContext';

import dynamic from 'next/dynamic';
import GooglePlacesSearch from './GooglePlacesSearch';
import JamCardShadcn from './CardJam';

const MapRender = dynamic(() => import('./MapRender'), { ssr: false });

export default function Home() {
  return (
    <MapProvider>
     <div className="flex flex-col max-w-[80%] mx-auto h-144 gap-6 p-6 overflow-y-auto">
        <div className="w-[900px] max-w-[80%] mx-auto ">
          <div className="w-48">
            <GooglePlacesSearch />
          </div>
        </div>

        <div className="w-[900px] max-w-[80%]  mx-auto rounded-xl overflow-visible flex gap-12">
          <div className="flex flex-col">
            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />

            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />

            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />

            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />

            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />

            <JamCardShadcn
              jamName={'Tonky Blues Jam'}
              spotName={'Moe Club'}
              tags={['Blues', 'Improvisation', 'Rock']}
              address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
              time={'Tuesday, Oct 21 - 12:00 PM'}
              src={'/images/sydney3.jpg'}
            />
          </div>

          <MapRender />
        </div>
      </div>

      <JamCardShadcn
        jamName={'Tonky Blues Jam'}
        spotName={'Moe Club'}
        tags={['Blues', 'Improvisation', 'Rock']}
        address={' Av. de Alberto de Alcocer, 32, Chamartín, 28036 Madrid'}
        time={'Tuesday, Oct 21 - 12:00 PM'}
        src={'/images/sydney3.jpg'}
      />
    </MapProvider>
  );
}
