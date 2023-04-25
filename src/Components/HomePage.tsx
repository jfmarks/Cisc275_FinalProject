import { Button, Row, Col } from "react-bootstrap";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag } from "react-dnd";
import { monitorEventLoopDelay } from "perf_hooks";
import { isDecorator } from "typescript";
import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import { Restaurant } from "../Interfaces";

export function HomePage(): JSX.Element {
    return (
        <div>
            <Row
                style={{
                    height: "100px",
                    alignContent: "center",
                    justifyContent: "center",
                    backgroundColor: "grey",
                    margin: "20px",
                    fontSize: 30
                }}
            >
                Rate-a-Restaurant
            </Row>
            <Row>
                <Col>
                    <Row
                        style={{
                            width: "120px",
                            height: "100px",
                            verticalAlign: "center",
                            backgroundColor: "grey",
                            margin: "20px",
                            fontSize: 30
                        }}
                    >
                        List of Users
                    </Row>
                    <Row
                        style={{
                            width: "120px",
                            height: "100px",
                            verticalAlign: "center",
                            margin: "20px",
                            fontSize: 30
                        }}
                    >
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                marginTop: "5px"
                            }}
                        >
                            Critic
                        </Button>
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                marginTop: "5px"
                            }}
                        >
                            Manager
                        </Button>
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                marginTop: "5px"
                            }}
                        >
                            Foodie
                        </Button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
