//export {};
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { Col } from "react-bootstrap";
//import { Interface } from "../Interfaces";
//import User  from "../Interfaces";
import CurrentUser from "../CurrentUser";
//import { log } from "console";

const RANK = ["User", "Super", "Admin"];

export function UserList(/* { options }: { options: string[] } */): JSX.Element {
    //const id = User.id;

    const [rank, setRank] = useState<string>("User");
    function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
        setRank(event?.target.value);
    }
    /* function chooseRank() {
            const [rank, setRank] = useState<string[]>([
                "User",
                "Super",
                "Admin"
            ]);
            setRank(rank);
        } */
    return (
        <div>
            <header> Choose a Rank: </header>

            {/* drop down / select a rank */}
            <Form.Group>
                <Form.Label>Pick a rank:</Form.Label>
                <Form.Select value={rank} onChange={updateRank}>
                    {RANK.map((answer: string) => (
                        <option key={answer}>{answer}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            {/* <div>
                {{rank === "Super": id == {CurrentUser}: id === {rank}}}{" "}
            </div> */}
        </div>
    );
}
