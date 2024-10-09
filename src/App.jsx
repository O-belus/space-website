import Home from "./components/Home";
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology'
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/ui/Layout";



export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    </Routes>
  )
}