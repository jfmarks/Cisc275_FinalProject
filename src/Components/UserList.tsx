import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { User, id } from "../Interfaces/User";


export function UserList(user : User, id: User.id): JSX.Element{
    

    function backButton() : void{
        {/*switches baack to main screens*/}
    }
    function filterButton() : void{
    {/*filter users by rank, alphabetically or most recently joined*/}
        const [filter, setFilter] = useState<string>("rank");
        function updateFilter(event: React.ChangeEvent<HTMLSelectElement>) {
            setFilter(event.target.value);
        }
        const requestSort = key => {
            let direction = 'ascending';
            if (sortConfig.key === key && sortConfig.direction === 'ascending') {
              direction = 'descending';
            }
            setSortConfig({ key, direction });
          }
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Select value={filter} onChange={updateFilter}>
                    <option value="Rank">Rank</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Most Recent">Most Recent</option>
                </Form.Select>
            </Form.Group>
            {/* {filter === "Rank" ? <div><Button> {id === "Manager"} </Button><Button> {id === "Critic"} </Button><Button> {id === "Foodie"} </Button></div> :  } */}
            <div><button type="button" onClick={() => requestSort('Rank')}>
            Rank
          </button>
          <button type="button" onClick={() => requestSort('A-Z')}>
            A-Z
          </button>
          <button type="button" onClick={() => requestSort('Recent')}>
            Most Recent
          </button></div>
        </div>
    }
    function editButton():void{
        {/*remove or change user*/}
        
    }
    function addButton() : void{
        {/* add if user , ?max 3 users? */}

    }
    function userButtons({options}: {
        options: string[];
    }): JSX.Element {
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
        <div>{/* Header*/}
            <div><header>User List
            <Button onClick={backButton}> Back</Button>
            <Button onClick={filterButton}> Filter </Button>
            <Button onClick={editButton} disabled={id === "Foodie"}> Edit </Button> 
            <Button onClick={addButton} disabled={id !== "Manager"}> Add</Button>
            </header>
            </div>
            <Button onClick={userButtons}> User 1</Button>
            <Button onClick={userButtons}> User 2</Button>
            <Button onClick={userButtons}> User 3</Button>
            {/*elimiate options as they are picked*/}
        </div>
    );

}