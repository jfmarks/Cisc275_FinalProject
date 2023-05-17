import React from "react";
import "./App.css";
import "./RestaurantStyle.css";
import { UserRestaurants } from "./Components/UserRestaurants";
import { Col, Container, Row } from "react-bootstrap";
import RestaurantBucket from "./Components/RestaurantBucket";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FixedHeader from "./Components/FixedHeader";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <FixedHeader></FixedHeader>
                <div className="App">
                    <Container>
                        <Row style={{ position: "absolute", top: 60 }}>
                            <Col style={{ width: "300px" }} lg={6}>
                                <RestaurantBucket></RestaurantBucket>
                            </Col>
                            <Col>
                                <UserRestaurants></UserRestaurants>
                            </Col>
                            <Col style={{ width: "300px" }} lg={6}>
                                <RestaurantBucket></RestaurantBucket>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
