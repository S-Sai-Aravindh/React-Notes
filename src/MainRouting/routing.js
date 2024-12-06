import {createBrowserRouter} from "react-router-dom";
import ParentComp from "../components/ParentComp";
import VirtualDOM from "../components/VirtualDOM";
import MyStateComp from "../components/MyStateComp";
import MyimagesComp from "../Tasks/MyimagesComp";
import SaiFuncComp from "../Tasks/SaiFuncComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import ReactHooksComp from "../Hook/ReactHooksComp";
import UseStateHooksComp from "../Hook/UseStateHooksComp";
import UseeffectHooksComp from "../Hook/UseeffectHooksComp";
import MainDashboardComp from "../Layout/MainDashboard";
import LoginComp from "../Layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";

const routing = createBrowserRouter([
    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},
    
    {path:"MainDashboard",element:<MainDashboardComp/> ,children:[
        {path:"ParentComp",element:<ParentComp/>},
        {path:"VirtualDom",element:<VirtualDOM/>},
        //4. Child routing
        {path:"hooks",element:<ReactHooksComp/>,children:[
            {path:"useState",element:<UseStateHooksComp/>},
            {path:"useEffect",element:<UseeffectHooksComp/>}
        ]},
        {path:"proddash",element:<ProductDashComp/>},
        {path:"prodadd",element:<ProductAddComp/>},
        {path:"prodedit/:id",element:<ProductEditComp/>},
        // 3. Parameterized routing 
        {path:"images/:id",element:<MyimagesComp/>}, 
        {path:"favcolor",element:<MyFavColorComp newColor="Green" />} ,
        {path:"formvalcomp",element:<FormValComp/>} 
    ]},
    //5.wild card rouitng
    {path:"*",element:<PageNotFoundComp/>}
    
]);

export default routing;