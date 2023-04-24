export {};
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { User } from "../Interfaces/User";
//import { log } from "console";

export function UserList(user: User): JSX.Element {
    const id = user.id;
    function userButtons({ options }: { options: string[] }): JSX.Element {
        const [rank, setRank] = useState<string>(options[0]);

        function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
            setRank(event?.target.value);
        }
        return (
            <div>
                {/* buttons drop down list
        3 drop downs, ?ranks disabled as they are picked?
        ??input user names before picking rank??*/}

                <Form.Group>
                    <Form.Label>Pick a rank:</Form.Label>
                    <Form.Select value={rank} onChange={updateRank}>
                        {options.map((answer: string) => (
                            <option key={answer}>{answer}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
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
}
