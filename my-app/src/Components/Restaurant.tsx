import React, { useState }  from "react";
import { Button } from "react-bootstrap";

export function Restaurant(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
        <Button style = {{width: "50%", height: "10%", backgroundColor: "orange"}} onClick={() => console.log("Back")}>
        Back
      </Button> {"Website Name"}
    </div>
    );
}