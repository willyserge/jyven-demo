import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";

const ProductTab = ({serviceProducts }) => {
  return (
    <div className="product-tab space-mb--r100">
      <Container>
        <Tab.Container defaultActiveKey="sale">
          <Nav
            variant="pills"
            className="product-tab__navigation text-center justify-content-center space-mb--r60"
          >
            <Nav.Item>
              <Nav.Link eventKey="sale">Services Near You</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="sale">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={serviceProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTab;
