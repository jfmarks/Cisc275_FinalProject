import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export function Restaurant(): JSX.Element {
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
                Restaurant Name
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
