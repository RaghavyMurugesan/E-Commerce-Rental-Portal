import React from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CachedIcon from "@mui/icons-material/Cached";
let productList = [
  {
    id: 0,
    name: "Nikon Z6",
    image: "https://lenstiger.com/image/product/5e085a34e1599Z6.jpg",
    brand: "Nikon",
    category: "Camera",
    price: 2500,
    unit: 1,
    description:
      "The Nikon Z6 (Body) Mirrorless Camera camera has CMOS Sensor sensor. As far as the ISO levels are concerned, this camera supports 100-51200 ISO. Movies can be recorded at a resolution of 3840x2160 Pixels (2160p),1920x1080 Pixels (1080p HD). Overall, this camera weighs 675 Gram and has 3.2 Inch display to click, and preview images.",
    // specification: {
    //   connectivity: "Wi-Fi,HDMI",
    //   zoom: "1080p HD Video",
    //   sensor: "CMOS Sensor",
    //   battery: "Rechargable",
    //   resolution: "25MP Resolution",
    //   userRating: "5.0",
    // },
  },
  {
    id: 1,
    name: "Sony HXR-NX200",
    image: "https://lenstiger.com/image/product/621ce4c1b3fe0816DfEJkYRL._AC_SL1500_.jpg",
    brand: "Sony",
    category: "Camera",
    price: 1750,
    unit: 1,
    description:
      "The freshly released Sony HXR-NX200 is a 20MP 1. 0 Exmor R CMOS camcorder, capable of shooting 100Mbps 4k in XAVC S at 25p, or 1080p at 50p onto SD cards. The stabilised lens is 29mm to 348mm equivalent 12x optical servo zoom, opening up from F2. 8 to F11. The lens has three rings to control focus, aperture and zoom, all of which can also be controlled automatically. Sony's Clear Image zoom extends the zoom range to 18x in 4k and 24x in 1080p. It features a 1.56M dots LCD and viewfinder, built-in ND filters (2-6 stops), microphone and two phantom-powered XLR-ports and uses Sony'ss NP-F style batteries. Sony is also touting some new natural color science. HXR-NX200 is an affordable, compact camcorder with a big 1. 0-type sensor and new colour reproduction for superb 4K or Full-HD image quality. It offers all the professional features you need with refined manual controls including three independent manual lens rings, smart fully auto options and more.",
  },
  {
    id: 2,
    name: "Panasonic Lumix-GH5s",
    image: "https://lenstiger.com/image/product/5e08b39e8858egh5-pana.jpg",
    brand: "Panasonic",
    category: "Camera",
    price: 2250,
    unit: 1,
    description:
      " The Panasonic Lumix DC-GH5S is a mirrorless Micro Four Thirds camera optimized for movie recording and low-light performance. Revolving around a 10.28MP Digital Live MOS sensor, DCI and UHD 4K video recording is possible at up to 60p and the large individual pixel size also affords impressive low-light performance to an extended ISO 204800, along with Dual Native ISO technology at ISO 400 and ISO 2500",
  },
  {
    id: 3,
    name: "Canon RF 70-200mm F2.8 L",
    image: "https://lenstiger.com/image/product/60dd95586db0aCanon-RF-70-200mm-F2.8-L-IS-USM-Lens.jpg",
    brand: "Canon",
    category: "lens",
    price: 1750,
    unit: 1,
    description:
      "Capture the world with outstanding flexibility and quality with a super compact F2.8 telephoto zoom that incorporates a five-stop Image Stabilizer to ensure great hand held results, closer focusing down to 0.7m and fastest-ever AF.",
  },
  {
    id: 4,
    name: " GODOX SL100Bi",
    image: "https://lenstiger.com/image/product/621ce25665a8a71gATSv47hS._SL1500_.jpg",
    brand: "Godox",
    category: "Lights",
    price: 500,
    unit: 1,
    description:
      "The SL100Bi Bi-Color LED Video Light from Godox checks all the boxes on your wish list. It has variable color temperature from 2800 to 6500K to handle any ambient light situation, match other fixtures, or spark creative expression. The light's high CRI/TLCI rating of 96/97 is an indication of advanced accuracy in color rendering. The SL100Bi is dimmable too, from 0 to 100%, and while you can make these adjustments locally on the fixture you can take advantage of its 32 channels and 16 groups to make changes wirelessly with an optional remote or with a smartphone using the Godox App. Although these are valuable assets Godox has gifted the light with special FX that include Lightning 1/2/3, Flash, Conference, Paparazzi, Television, Broken Bulb, Candle, Fire, and Fireworks.",
  },
];
let stepdata = [
  {
    step: 1,
    function: "Choose the Product and Date",
    icon: <EventAvailableIcon />,
    description: "Browse & Select from a wide range of Rental products on our website",
  },
  {
    step: 2,
    function: "Choose Location and Transit-mode",
    icon: <LocationOnIcon />,
    description: "We provide either Shipping to your address or Pickup at our Store/Franchise",
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
