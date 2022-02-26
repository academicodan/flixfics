import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
    return (
        <div className="pt-4">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>{t('login.email')}</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="text"
                    placeholder={t('login.email')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    required
                    name="senha"
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      );
}

export default Login;
