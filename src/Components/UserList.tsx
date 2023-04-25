export {};
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import { Interface } from "../Interfaces";
import { User } from "../Interfaces/User";
//import { log } from "console";

const RANK = ["User", "Super", "Admin"];

export function UserList(user: User): JSX.Element {
    const id = user.id;
    function userButtons(): void {
        /* function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
            setRank(event?.target.value);
        } */
        function chooseRank() {
            const [rank, setRank] = useState<string>("");
            setRank(rank);
        }
        <div>
            <header> User List </header>
            {/* <Col>
                {RANKS.map((option: string) => (
                    <div key={option} style={{ marginBottom: "4px" }}>
                        Add{" "}
                        <Button
                            onClick={() => {
                                chooseRank;
                            }}
                            size="sm"
                        >
                            {option}
                        </Button>
                    </div>
                ))}
            </Col> */}
            <Form.Group>
                <Form.Select value={RANK} onChange={chooseRank}>
                    {RANK.map((rank: string) => (
                        <option key={rank}>{rank}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>;
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
        ??input user names before picking rank??*/}

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
