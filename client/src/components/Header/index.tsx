import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './header.scss';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarBrand className="navbar-home" href="/">{t('home.title')}</NavbarBrand>
      </Container>
    </Navbar>
  );
};
