import React from 'react';
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CachedIcon from "@mui/icons-material/Cached";
let productList = [
  {
    name: "Nikon Z6",
    image: "https://lenstiger.com/image/product/5e085a34e1599Z6.jpg",
    brand: "Nikon",
    category: "Camera",
    price: 2500,
    unit: 1,
  },
  {
    name: "Sony HXR-NX200",
    image:
      "https://lenstiger.com/image/product/621ce4c1b3fe0816DfEJkYRL._AC_SL1500_.jpg",
    brand: "Sony",
    category: "Camera",
    price: 1750,
    unit: 1,
  },
  {
    name: "Panasonic -GH5s",
    image: "https://lenstiger.com/image/product/5e08b39e8858egh5-pana.jpg",
    brand: "Panasonic",
    category: "Camera",
    price: 2250,
    unit: 1,
  },
  {
    name: "Canon RF 70-200mm F2.8 L",
    image:
      "https://lenstiger.com/image/product/60dd95586db0aCanon-RF-70-200mm-F2.8-L-IS-USM-Lens.jpg",
    brand: "Canon",
    category: "lens",
    price: 1750,
    unit: 1,
  },
  {
    name: " GODOX SL100Bi",
    image:
      "https://lenstiger.com/image/product/621ce25665a8a71gATSv47hS._SL1500_.jpg",
    brand: "Godox",
    category: "Lights",
    price: 500,
    unit: 1,
  },
];
let stepdata = [
  {
    step: 1,
    function: "Choose the Product and Date",
    icon: <EventAvailableIcon />,
    description:
      "Browse & Select from a wide range of Rental products on our website",
  },
  {
    step: 2,
    function: "Choose Location and Transit-mode",
    icon: <LocationOnIcon />,
    description:
      "We provide either Shipping to your address or Pickup at our Store/Franchise",
  },
  {
    step: 3,
    function: "Shoot",
    icon: <CameraAltIcon />,
    description: "Go out and get some great shots during your rental period.",
  },
  {
    step: 4,
    function: "Return",
    icon: <CachedIcon />,
    description:
      "Repack and Return the equipment in the same box on the day your rental ends.We provide return stickers",
  },
];

export { stepdata, productList };
