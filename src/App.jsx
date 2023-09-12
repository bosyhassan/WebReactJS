
import './App.css';
import Home from './assi-component/home/Home'; 
import Layout from './assi-component/Layout';
import About from './assi-component/about/About';
import Portfolio from './assi-component/portfolio/Portfolio';
import Contact from './assi-component/contact/Contact';
import Notfound from './assi-component/notfound/Notfound';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

let Routes=createHashRouter([
  {path:'',element:<Layout/> , children:[
    {path:'start', element :<Home/>},
    {path:'', element :<Home/>},
    {path:'about', element :<About/>},
    {path:'portfolio', element :<Portfolio/>},
    {path:'contact', element :<Contact/>},
    {path:'*', element :<Notfound/>}
  ]}
])
export default function App() {
  return <RouterProvider router={Routes}></RouterProvider>
}


