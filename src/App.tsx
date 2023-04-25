import React from "react";
import "./App.css";
//import { Restaurant } from "./Components/Restaurant";
import { UserRestaurants } from "./Components/UserRestaurants";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <h1 style={{ fontSize: 16 }}>
                By Quinten Bettin, Anastasia Donato, Kareena Keswani, Logan
                Levine, Jacob Marks, and Alex Peluso
            </h1>
            <div className="App">
                <Container>
                    <Row className="App-title">Rate-a-Restaurant</Row>
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
                                <Button className="App-main-buttons">
                                    Critic
                                </Button>
                            </Row>
                            <Row className="App-main-button-rows">
                                <Button className="App-main-buttons">
                                    Manager
                                </Button>
                            </Row>
                            <Row className="App-main-button-rows">
                                <Button className="App-main-buttons">
                                    Foodie
                                </Button>
                            </Row>
                        </Col>
                        <Col>
                            <UserRestaurants></UserRestaurants>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*<Restaurant></Restaurant>*/}
        </div>
    );
}

export default App;
