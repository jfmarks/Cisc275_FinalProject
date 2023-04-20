import React from "react";
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
                        Price
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
                        Rating
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
                        Dining Experience
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
