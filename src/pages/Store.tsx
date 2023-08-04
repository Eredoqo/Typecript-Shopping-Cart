import { Col, Row } from "react-bootstrap";
import storeItems from "../data/item.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <div>
        <h1 className="text-center">Store</h1>
      </div>
      <Row md={2} lg={3} sx={1} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
