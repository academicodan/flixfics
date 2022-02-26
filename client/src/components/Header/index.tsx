import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import './header.scss';

export const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarBrand className="navbar-home" href="/">FLIXFICS</NavbarBrand>
        <NavbarBrand href='/clientes'>Clientes</NavbarBrand>
      </Container>
    </Navbar>
  );
};
