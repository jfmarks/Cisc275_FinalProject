import { Button, Row, Col } from "react-bootstrap";
import React from "react";
{
    /*
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag } from "react-dnd";
import { monitorEventLoopDelay } from "perf_hooks";
import { isDecorator } from "typescript";
import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import { Restaurant } from "../Interfaces";
*/
}
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
                            height: "300px",
                            verticalAlign: "top",
                            backgroundColor: "blue",
                            margin: "20px",
                            fontSize: 30
                        }}
                    >
                        <Button
                            style={{
                                width: "110px",
                                height: "100px",
                                verticalAlign: "center",
                                backgroundColor: "grey",
                                margin: "5px",
                                fontSize: 30
                            }}
                        >
                            List of Users
                        </Button>
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                margin: "5px",
                                marginLeft: "5px",
                                width: "110px",
                                height: "45px"
                            }}
                        >
                            Critic
                        </Button>
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                margin: "5px",
                                marginLeft: "5px",
                                width: "110px",
                                height: "45px"
                            }}
                        >
                            Manager
                        </Button>
                        <Button
                            style={{
                                verticalAlign: "bottom",
                                backgroundColor: "grey",
                                margin: "5px",
                                marginLeft: "5px",
                                width: "110px",
                                height: "45px"
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
