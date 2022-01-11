
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <div>
        <Router>
          <Topbar/>
          <div className="container">
            <Sidebar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
              <Routes>
                <Route path="/users" element={<UserList/>  }/>
              </Routes>
              <Routes>
                <Route path="/user/:userId" element={<User/>  }/>

              </Routes>
              <Routes>
                <Route path="/newUser" element={<NewUser/>  }/>
              </Routes>
              <Routes>
                <Route path="/products" element={<ProductList/>  }/>
              </Routes>
              <Routes>
                <Route path="/product/:productId" element={<Product/>  }/>
              </Routes>
              <Routes>
                <Route path="/newproduct" element={<NewProduct/>  }/>
              </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
