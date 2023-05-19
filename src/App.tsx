/* eslint-disable no-extra-parens */
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
    const [userL, setUserList] = useState<CurrUser[]>(userList);
    const handleUserChange = (newUser: number) => {
        setUser(userL[newUser]);
    };
    const handleUserAdd = (newUser: CurrUser) => {
        setUserList([...userL, newUser]);
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
                <FixedHeader
                    handleUserChange={handleUserChange}
                    user={user}
                    users={userL}
                    handleUserAdd={handleUserAdd}
                ></FixedHeader>
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
                                {userL.map((userMap) => (
                                    <div key={userMap.id}>
                                        <RestaurantBucket
                                            disabled={!(user.id === userMap.id)}
                                            user={user}
                                            acceptingUserOfType="Foodie"
                                        ></RestaurantBucket>
                                    </div>
                                ))}
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
                                            user.type == "Foodie"
                                                ? "hidden"
                                                : "visible"
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
