import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Food&Go</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-familty: "Lobster Two", cursive;
  color: #f27121;
`;

const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2.5rem;
    color: #f27121;
  }
`;

export default App;
