import { Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Createproduct from "./pages/Createproduct";
import Productedit from "./pages/Productedit";


function App() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Rest api</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create-product">create products</a>
              </li>
             
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success text-white " type="submit">Search</button>
            </form>
          </div>
        </nav>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/create-product" element={<Createproduct/>} />
    <Route path="/update/:id" element={<Productedit/>} />
  </Routes>
    </>
  );
}

export default App;
