import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom"
import styled from "styled-components";
import AboutUs from "./Components/Main Components/AboutUs/";
import Blog from "./Components/Main Components/Blog";
import ContactUs from "./Components/Main Components/ContactUs";
import Dashboard from "./Components/Main Components/Dashboard";
import Donate from "./Components/Main Components/Donate";
import Festivals from "./Components/Main Components/Festivals";
import Header from "./Components/Main Components/Header";
import Media from "./Components/Main Components/Media";
import BgImage from "../src/assets/bg-cover.png";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Media" element={<Media />} />
          <Route exact path="/Donate" element={<Donate />} />
          <Route exact path="/Festivals" element={<Festivals />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

const Container = styled.div`
min-height: 100vh;
background-color: #fdf6e6;
position:relative;
&:before {
  content: "";
  position: absolute;
  top: 150px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url(${BgImage});
  background-size: 250px;
  background-repeat: repeat;
  background-attachment: fixed;
  opacity: 0.3;
}
`

