import { Container, Navbar as Nav, NavbarBrand, NavbarProps } from "react-bootstrap";

interface NavProps extends NavbarProps {
  label: string;
  color?: string;
  backgroundColor?: string;
}

const Navbar = ({ color, label, backgroundColor, ...props }: NavProps) => {
  return (
    <Nav style={{backgroundColor}} {...props} >
      <Container>
        <NavbarBrand style={{color}}>{label}</NavbarBrand>
      </Container>
    </Nav>
  );
};

export default Navbar;
