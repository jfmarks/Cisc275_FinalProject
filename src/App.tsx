import React, { useState } from "react";
import "./App.css";
import "./RestaurantStyle.css";
import { UserRestaurants } from "./Components/UserRestaurants";
import { Col, Container, Row } from "react-bootstrap";
import RestaurantBucket from "./Components/RestaurantBucket";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FixedHeader from "./Components/FixedHeader";
import { CurrUser, Restaurant } from "./Interfaces";
import userList from "./CurrentUser";

function App() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    function handleChange(listR: Restaurant[]) {
        setRestaurants(listR);
    }
    const [user, setUser] = useState<CurrUser>(userList[0]);

    const handleUserChange = (newUser: number) => {
        setUser(userList[newUser]);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <FixedHeader
                    user={user}
                    handleUserChange={handleUserChange}
                ></FixedHeader>
                <div className="App">
                    <Container>
                        <Row style={{ position: "absolute", top: 60 }}>
                            <Col style={{ width: "300px" }} lg={6}>
                                <h1>Foodie List</h1>
                                <RestaurantBucket></RestaurantBucket>
                            </Col>
                            <Col>
                                <UserRestaurants
                                    restaurants={restaurants}
                                    handleChange={handleChange}
                                    user={user}
                                ></UserRestaurants>
                            </Col>
                            <Col style={{ width: "300px" }} lg={6}>
                                <h1>Manager List</h1>
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
