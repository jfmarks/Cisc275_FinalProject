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
import SearchBar from "./Components/SearchBar";
import restaurant from "./Components/RestaurantList";
import ManagerBucket from "./Components/ManagerBucket";

function App() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    function handleChange(listR: Restaurant[]) {
        setRestaurants(listR);
    }
    const [user, setUser] = useState<CurrUser>(userList[0]);

    const handleUserChange = (newUser: number) => {
        setUser(userList[newUser]);
    };
    const makeChanges = (changedR: Restaurant) => {
        const updatedRestaurants = restaurants.map((restaurant: Restaurant) => {
            if (restaurant.id === changedR.id) {
                return changedR;
            } else {
                return restaurant;
            }
        });
        setRestaurants(updatedRestaurants as Restaurant[]);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <FixedHeader handleUserChange={handleUserChange}></FixedHeader>
                <div className="App">
                    <div
                        style={{
                            border: "1px solid #ccc", // Border color
                            borderRadius: "1px", // Border radius
                            padding: "10px", // Padding around the container
                            backgroundColor: "lightblue"
                        }}
                    >
                        <SearchBar
                            placeholder="Do we have your restaurant?"
                            data={restaurant}
                        />
                    </div>
                    <Container>
                        <Row style={{ position: "absolute", top: 200 }}>
                            <Col style={{ width: "300px" }} lg={6}>
                                <h1>Foodie List</h1>
                                <RestaurantBucket
                                    user={user}
                                    acceptingUserOfType="Foodie"
                                ></RestaurantBucket>
                            </Col>
                            <Col>
                                <UserRestaurants
                                    restaurants={restaurants}
                                    handleChange={handleChange}
                                    user={user}
                                ></UserRestaurants>
                            </Col>
                            <Col style={{ width: "300px" }} lg={6}>
                                <div
                                    style={{
                                        visibility:
                                            user.type == "Manager"
                                                ? "visible"
                                                : "hidden"
                                    }}
                                >
                                    <h1>Manager List</h1>
                                    <ManagerBucket
                                        user={user}
                                        acceptingUserOfType="Manager"
                                        makeChanges={makeChanges}
                                    ></ManagerBucket>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
