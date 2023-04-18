import { Button, Row, Col } from "react-bootstrap";
import React from "react";
{
    /*
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag } from "react-dnd";
import { monitorEventLoopDelay } from "perf_hooks";
import { isDecorator } from "typescript";
import React, { useState } from "react";
*/
    /*
export const ItemTypes = {
    FOOD: "food"
};

function Food() {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.FOOD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: "bold",
                cursor: "move"
            }}
        >
            bunger
        </div>
    );
}
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
                WEBSITE NAME
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
                {/*<Col>{Food()}</Col>*/}
            </Row>
        </div>
    );
}
