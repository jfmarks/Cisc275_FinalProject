/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Restaurant, DraggedRestaurant, CurrUser } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import { Button, Card, Row } from "react-bootstrap";
import CurrentSortStyle from "../CurrentSort";
import SortSelector from "./SortStyleSelector";

interface bucketProp {
    user: CurrUser;
    acceptingUserOfType: string;
    makeChanges: (changedR: Restaurant) => void;
}

export default function ManagerBucket({
    user,
    acceptingUserOfType,
    makeChanges
}: bucketProp): JSX.Element {
    const [items, setItems] = useState<Restaurant[]>([]);
    const [itemIDs, setIDs] = useState<number[]>([]);

    const handleAddRestaurant = (newItemID: string) => {
        if (!itemIDs.includes(newItemID as unknown as number)) {
            const newItem: Restaurant = RestaurantList.find(
                (restaurant) => restaurant.id === newItemID
            ) as Restaurant;
            setItems((items) => [...items, newItem as Restaurant]);
            setIDs([...itemIDs, newItemID as unknown as number]);
        }
    };
    const handleEdit = (editedR: Restaurant) => {
        const updatedRestaurants = items.filter(
            (restaurant) => restaurant.id !== editedR.id
        );
        const updatedIDs = itemIDs.filter(
            (id) => id !== (editedR.id as unknown as number)
        );
        setIDs(updatedIDs);
        setItems(updatedRestaurants);
        makeChanges(editedR);
    };

    const handleRestaurantNameChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = items.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, name: e.target.value };
            }
            return restaurant;
        });
        setItems(updatedRestaurants);
    };
    const handleRestaurantDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = items.map((restaurant: Restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, description: e.target.value };
            }
            return restaurant;
        });
        setItems(updatedRestaurants);
    };
    const handleRestaurantPriceChange = (price: string, id: string) => {
        const newList = items.map((rest: Restaurant) => {
            if (rest.id === id) {
                return { ...rest, priceRange: price };
            } else {
                return rest;
            }
        });
        setItems(newList);
    };
    const handleRestaurantRatingChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = items.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, averageRating: Number(e.target.value) };
            }
            return restaurant;
        });
        setItems(updatedRestaurants);
    };

    const [{ isOver }, drop] = useDrop({
        accept: "RESTAURANT",
        drop: (item: DraggedRestaurant) => {
            handleAddRestaurant(item.newItem);
        },
        canDrop: () => {
            return user.type === acceptingUserOfType;
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    const alphabetical = [...items];
    alphabetical.sort((a, b) => a.name.localeCompare(b.name));

    const highToLow = [...items];
    highToLow.sort((a, b) => b.averageRating - a.averageRating);

    return (
        <>
            <div>
                <SortSelector
                    edit={user.type == "Manager" ? true : false}
                ></SortSelector>
            </div>
            <Row
                ref={drop}
                role={"RestaurantBucket"}
                style={{
                    backgroundColor: isOver ? "grey" : "lightblue",
                    justifyContent: "center",
                    minHeight: "500px"
                }}
            >
                Insert Restaurants here:
                {CurrentSortStyle.type == "alphabetical"
                    ? alphabetical.map((item) => (
                          <div key={item.id}>
                              <Card.Img
                                  key={item.id}
                                  src={item.image}
                                  className="card-image"
                              />
                              <Card.Body>
                                  <div
                                      className="editmode"
                                      style={{ minHeight: "300px" }}
                                  >
                                      <input
                                          className="inputedit"
                                          type="text"
                                          value={item.name}
                                          onChange={(e) =>
                                              handleRestaurantNameChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <input
                                          className="inputedit"
                                          type="text"
                                          value={item.description}
                                          onChange={(e) =>
                                              handleRestaurantDescriptionChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <input
                                          className="inputedit"
                                          type="range"
                                          step="0.1"
                                          min="1"
                                          max="5"
                                          value={item.averageRating}
                                          onChange={(e) =>
                                              handleRestaurantRatingChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <p
                                          style={{
                                              marginTop: "-25px"
                                          }}
                                      >
                                          {item.averageRating} ★
                                      </p>
                                      <div className="priceButtonGroup">
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $
                                          </Button>
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $$
                                          </Button>
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$$$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$$$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $$$
                                          </Button>
                                          <Button
                                              onClick={() => handleEdit(item)}
                                          >
                                              Done
                                          </Button>
                                      </div>
                                  </div>
                              </Card.Body>
                          </div>
                      ))
                    : highToLow.map((item) => (
                          <div key={item.id}>
                              <Card.Img
                                  key={item.id}
                                  src={item.image}
                                  className="card-image"
                              />
                              <Card.Body>
                                  <div
                                      className="editmode"
                                      style={{ minHeight: "300px" }}
                                  >
                                      <input
                                          className="inputedit"
                                          type="text"
                                          value={item.name}
                                          onChange={(e) =>
                                              handleRestaurantNameChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <input
                                          className="inputedit"
                                          type="text"
                                          value={item.description}
                                          onChange={(e) =>
                                              handleRestaurantDescriptionChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <input
                                          className="inputedit"
                                          type="range"
                                          step="0.1"
                                          min="1"
                                          max="5"
                                          value={item.averageRating}
                                          onChange={(e) =>
                                              handleRestaurantRatingChange(
                                                  e,
                                                  item.id
                                              )
                                          }
                                      />
                                      <p
                                          style={{
                                              marginTop: "-25px"
                                          }}
                                      >
                                          {item.averageRating} ★
                                      </p>
                                      <div className="priceButtonGroup">
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $
                                          </Button>
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $$
                                          </Button>
                                          <Button
                                              className={`priceButton ${
                                                  item.priceRange === "$$$"
                                                      ? "active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleRestaurantPriceChange(
                                                      "$$$",
                                                      item.id
                                                  )
                                              }
                                          >
                                              $$$
                                          </Button>
                                          <Button
                                              onClick={() => handleEdit(item)}
                                          >
                                              Done
                                          </Button>
                                      </div>
                                  </div>
                              </Card.Body>
                          </div>
                      ))}
            </Row>
        </>
    );
}
