export {};
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { Col } from "react-bootstrap";
//import { Interface } from "../Interfaces";
//import { User } from "../Interfaces";
//import { log } from "console";

//const RANK = ["User", "Super", "Admin"];

export function UserList(): JSX.Element {
    //const id = user.id;
    function userButtons(): JSX.Element {
        const [rank, setRank] = useState<string>("User");
        function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
            setRank(event.target.value);
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
                <div>
                    <header> Choose a Rank: </header>
                </div>
                {/* drop down / select a rank */}
                <div>
                    <Form.Group controlId="userRank">
                        <Form.Label>Choose a rank: </Form.Label>
                        <Form.Select value={rank} onChange={updateRank}>
                            <option value="user">User</option>
                            <option value="Super">Super</option>
                            <option value="admin">Admin</option>
                        </Form.Select>
                    </Form.Group>
                    The user is a rank of {rank}
                </div>
            </div>
        );
    }

    return (
        <div>
            <Button onClick={userButtons}> User 1</Button>
            <Button onClick={userButtons}> User 2</Button>
            <Button onClick={userButtons}> User 3</Button>
            {/*elimiate options as they are picked*/}
        </div>
    );

    {
        /* buttons drop down list
        3 drop downs, ?ranks disabled as they are picked?
        ??input user names before picking rank??*/
    }

    {
        /* <Form.Group>
            <Form.Label>Pick a rank:</Form.Label>
            <Form.Select value={rank} onChange={updateRank}>
                {options.map((answer: string) => (
                    <option key={answer}>{answer}</option>
                ))}
            </Form.Select>
        </Form.Group> */
    }
}
