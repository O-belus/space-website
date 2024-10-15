import Home from "./components/Home";
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology'
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/ui/Layout";
import { useEffect, useState } from "react";
import homeDesktopImg from '/home/background-home-desktop.jpg'
import homeTabletImg from '/home/background-home-tablet.jpg'
import homeMobileImg from '/home/background-home-mobile.jpg'
import destinationDesktopImg from '/destination/background-destination-desktop.jpg'
import destinationTabletImg from '/destination/background-destination-tablet.jpg'
import destinationMobileImg from '/destination/background-destination-mobile.jpg'
import crewDesktopImg from '/crew/background-crew-desktop.jpg'
import crewTabletImg from '/crew/background-crew-tablet.jpg'
import crewMobileImg from '/crew/background-crew-mobile.jpg'
import techDescktopImg from '/technology/background-technology-desktop.jpg'
import techTabletImg from '/technology/background-technology-tablet.jpg'
import techMoblieImg from '/technology/background-technology-mobile.jpg'


export default function App(){
  const getBackgroundImage = () => {
    if (window.innerWidth > 768) {
        return {
          home: homeDesktopImg,
          crew: crewDesktopImg,
          tech: techDescktopImg,
          destination: destinationDesktopImg,
          device: 'desktop',
        }
    } else if (window.innerWidth > 650) {
      return {
        home: homeTabletImg,
        crew: crewTabletImg,
        tech: techTabletImg,
        destination: destinationTabletImg,
        device: 'tablet',
      }
    } else {
      return {
        home: homeMobileImg,
        crew: crewMobileImg,
        tech: techMoblieImg,
        destination: destinationMobileImg,
        device: 'mobile',
      }
    }
};

const [Bg, setBg] = useState(getBackgroundImage);

const handleSetBgSrc = () => {
    setBg(getBackgroundImage());
};

useEffect(() => {
    window.addEventListener('resize', handleSetBgSrc);
    // Set initial background image on mount
    handleSetBgSrc();

    return () => {
        window.removeEventListener('resize', handleSetBgSrc);
    };
}, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home bgSrc={Bg.home} />} />
        <Route path="/destination" element={<Destination bgSrc={Bg.destination} />} />
        <Route path="/crew" element={<Crew bgSrc={Bg.crew} />} />
        <Route path="/technology" element={<Technology bgSrc={Bg.tech} device={Bg.device} />} />
      </Route>
    </Routes>
  )
}