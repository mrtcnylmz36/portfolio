"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}
