import bmwLogo from "../assets/bmw-logo.png";
import speedometer from "../assets/speedometer.png";
import flashLogo from "../assets/logo-flash.png";

export const features = [
  {
    title: "Agility",
    description: "Built for speed with a powerful 4.4 liter V-8 engine.",
    image: bmwLogo,
    alt: "BMW logo"
  },
  {
    title: "Performance",
    description: "Accelerates from zero to 60 mph in around 4 seconds.",
    image: speedometer,
    alt: "Speedometer icon"
  },
  {
    title: "Cutting Edge",
    description: "Modern engineering, premium comfort, and advanced technology.",
    image: flashLogo,
    alt: "Flash icon"
  }
];

export const specs = [
  ["Engine Displacement", "4,395 cc (4.4 L)"],
  ["Maximum Power", "Approx. 536 hp"],
  ["Maximum Torque", "Approx. 750 Nm"],
  ["Turning Radius", "12.10 m"],
  ["No. of Cylinders", "8"],
  ["Drive Type", "AWD"],
  ["Turbo Charger", "Yes"],
  ["Super Charger", "No"],
  ["Fuel Supply", "Direct Injection"]
];

export const stats = [
  {
    value: "250",
    unit: "kmph",
    label: "Top Speed"
  },
  {
    value: "8",
    unit: "Gears",
    label: "Gear Box"
  },
  {
    value: "536",
    unit: "hp",
    label: "Horse Power"
  }
];
