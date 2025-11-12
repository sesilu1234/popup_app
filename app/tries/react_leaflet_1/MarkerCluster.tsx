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
  const [selectedMarker, setSelectedMarker] = useState<Marker & MarkerDetail | null>(null);

  // Fetch markers positions
  useEffect(() => {
    fetch("/data/markers.json")
      .then((res) => res.json())
      .then((data: Marker[]) => setMarkersData(data));
  }, []);





useEffect(() => {
  if (!map || markersData.length === 0) return;

  // @ts-ignore
  const clusterGroup = L.markerClusterGroup();

  markersData.forEach((m) => {
    const marker = L.marker([m.lat, m.lng]);
    marker.on("click", () => setSelectedMarker(m));
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);

  // ✅ Cleanup function: remove the cluster from map
  return () => {
    map.removeLayer(clusterGroup);
  };
}, [map, markersData]);






  return (
    <>
      {selectedMarker && (
        <div className="absolute top-4 right-4 bg-white p-4 shadow-lg rounded-md w-64 z-[401]">
          <h3 className="font-bold mb-2">{selectedMarker.name}</h3>
          <Image
            src={selectedMarker.image}
            alt={selectedMarker.name}
            width={250}
            height={150}
            className="mb-2 rounded"
          />
          <p className="mb-1">{selectedMarker.description}</p>
          <p>
            Lat: {selectedMarker.lat.toFixed(4)}, Lng: {selectedMarker.lng.toFixed(4)}
          </p>
        </div>
      )}
    </>
  );
}
