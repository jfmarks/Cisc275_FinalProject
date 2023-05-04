import React from "react";
import "./App.css";
import "./RestaurantStyle.css";
import { UserRestaurants } from "./Components/UserRestaurants";
import { Button, Col, Container, Row } from "react-bootstrap";
import RestaurantBucket from "./Components/RestaurantBucket";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CurrentUser from "./CurrentUser";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <h1 style={{ fontSize: 16 }}>
                    By Quinten Bettin, Anastasia Donato, Kareena Keswani, Logan
                    Levine, Jacob Marks, and Alex Peluso
                </h1>
                <div className="App">
                    <Container>
                        <Row
                            style={{
                                backgroundColor: "lightblue",
                                color: "black"
                            }}
                            className="App-title"
                        >
                            Rate-a-Restaurant
                        </Row>
                        <Row>
                            <Col className="App-left-col" sm="auto">
                                <Row className="App-main-button-rows">
                                    <Button
                                        className="App-main-buttons"
                                        style={{
                                            height: "100px",
                                            fontSize: 30,
                                            marginTop: "-5px"
                                        }}
                                    >
                                        List of Users
                                    </Button>
                                </Row>
                                <Row className="App-main-button-rows">
                                    <Button
                                        className="App-main-buttons"
                                        onClick={() =>
                                            (CurrentUser.type = "Critic")
                                        }
                                    >
                                        Critic
                                    </Button>
                                </Row>
                                <Row className="App-main-button-rows">
                                    <Button
                                        className="App-main-buttons"
                                        onClick={() =>
                                            (CurrentUser.type = "Manager")
                                        }
                                    >
                                        Manager
                                    </Button>
                                </Row>
                                <Row className="App-main-button-rows">
                                    <Button
                                        className="App-main-buttons"
                                        onClick={() =>
                                            (CurrentUser.type = "Foodie")
                                        }
                                    >
                                        Foodie
                                    </Button>
                                </Row>
                            </Col>
                            <Col style={{ width: "300px" }} lg={6}>
                                <RestaurantBucket></RestaurantBucket>
                            </Col>
                            <Col>
                                <UserRestaurants></UserRestaurants>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
