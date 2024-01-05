import { Routes, Route } from "react-router-dom";
import Index from "./register/index.js";
import Glebas from "./register/glebas.js";
import Machinery from "./register/machinery.js";
import Landing from "./layouts/landing.js" 
import FeedbackNew from "./register/feedback-new.js";
import Appo from "./environmental/appo.js";
import Outorgas from "./environmental/outorgas.js";
import Products from "./pipeline/products.js";

function FrassonRoutes() {
    return (
      <Routes>
        <Route path="/register" element={<Landing/>}>
            <Route path="" element={<Index/>}/>
            <Route path="machinery" element={<Machinery/>}/>
            <Route path="glebas" element={<Glebas/>}/>
            <Route path="feedback/new" element={<FeedbackNew/>}/>
        </Route>
        <Route path="/inema" element={<Landing/>}>
            <Route path="appo" element={<Appo/>}/>
            <Route path="outorga" element={<Outorgas/>}/>
        </Route>
        <Route path="/pipes" element={<Landing/>}>
            <Route path="products" element={<Products/>}/>
        </Route>
        <Route path="/finances" element={<Landing/>}>
        </Route>
        <Route path="/analytics" element={<Landing/>}>
        </Route>
        <Route path="/dashboards" element={<Landing/>}>
        </Route>
        <Route path="/kpi" element={<Landing/>}>
        </Route>
        <Route path="/litec" element={<Landing/>}>
        </Route>
        <Route path="/api" element={<Landing/>}>
        </Route>
        <Route path="/irrigation" element={<Landing/>}>
        </Route>
      </Routes>
    );
  }
  export default FrassonRoutes;
  