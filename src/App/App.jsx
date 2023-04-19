import MainPage from "../components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import SecondPage from "../components/SecondPage/SecondPage";
import './App.css';
import Layout from "../components/Layout/Layout";
import ProjectItem from "../components/ProjectsItem/ProjectItem";
import Research from "../components/Research/Research";
import Architecture from "../components/Architecture/Architecture";
import AboutUs from "../components/AboutUs/AboutUs";
import ArchitectureItem from "../components/ArchitectureItem/ArchitectureItem";
//import {Context} from '../context'

function App() {

  return (
    //<Context.Provider value={{ project, projects }}>
    <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={ <MainPage /> } />
       <Route path='galery' element={ <SecondPage /> } />
       <Route path='galery/:id' element={ <ProjectItem /> } />
       <Route path='reserche' element={ <Research /> } />
       <Route path='architecture/:id' element={ <ArchitectureItem/>} />
       <Route path='architecture' element={ <Architecture /> } />
       <Route path='about_us' element={ <AboutUs /> } />
       </Route>
    </Routes>
    //</Context.Provider>
);
}
export default App;
