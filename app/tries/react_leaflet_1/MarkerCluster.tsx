"use client";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Image from "next/image";

type Marker = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

type MarkerDetail = {
  id: number;
  description: string;
  image: string;
};

export default function MapMarkersCluster() {
  const map = useMap();

  const [markersData, setMarkersData] = useState<Marker[]>([]);
  // const [markersDetails, setMarkersDetails] = useState<Record<number, MarkerDetail>>({});
  const [selectedMarker, setSelectedMarker] = useState<MarkerDetail | null>(
    null
  );

  // Fetch markers positions
  useEffect(() => {
    fetch("/markers.json")
      .then((res) => res.json())
      .then((data: Marker[]) => {
        setMarkersData(data); // update state
        console.log(data); // always log the fetched data
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!map || markersData.length === 0) return;

    // @ts-ignore
    const clusterGroup = L.markerClusterGroup();

    markersData.forEach((m) => {
      const marker = L.marker([m.lat, m.lng]);
      marker.on("click", () => onClickMarker(m.id));
      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);

    // ✅ Cleanup function: remove the cluster from map
    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [map, markersData]);

  const onClickMarker = async (id: number) => {
    try {
      const res = await fetch("/markersDetails.json");
      const data: MarkerDetail[] = await res.json();

      const markerDetail = data.find((m) => m.id === id);
      if (markerDetail) {
        setSelectedMarker(markerDetail);
      }
    } catch (err) {
      console.error("Failed to fetch marker details:", err);
    }
  };

  return (
    <>
      {selectedMarker && (
        <div className="absolute top-4 right-4 bg-white p-4 shadow-lg rounded-xl flex flex-col gap-3 w-64 z-[401] border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-900 truncate">
              {selectedMarker.name || "Image"}
            </h3>
            <button
              onClick={() => setSelectedMarker(null)}
              className="text-gray-500 hover:text-gray-800 text-sm font-bold"
            >
              ×
            </button>
          </div>

          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={selectedMarker.image}
              alt={selectedMarker.name || "Image"}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-700 leading-snug line-clamp-3">
            {selectedMarker.description}
          </p>
        </div>
      )}
    </>
  );
}
import { Skeleton } from "@/components/ui/skeleton";

function CardSkeleton() {
  return (
    <div className="p-3 rounded-xl shadow-sm bg-white w-60">
      <Skeleton className="h-32 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4 mt-3" />
      <Skeleton className="h-4 w-5/6 mt-2" />
    </div>
  );
}
