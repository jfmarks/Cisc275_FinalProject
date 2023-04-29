import React from "react";
import "./App.css";
import "./RestaurantStyle.css";
import { Restaurant } from "./Components/Restaurant";
import { UserRestaurants } from "./Components/UserRestaurants";
import { Col, Container, Row, Button } from "react-bootstrap";
import { UserList } from "./Components/UserList";
import { HomePage } from "./Components/HomePage";

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
                                <Button
                                    className="App-main-buttons"
                                    onClick={UserList}
                                >
                                    Users
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
            <p>
                <HomePage></HomePage>
            </p>
            <p>
                <Restaurant></Restaurant>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default App;
