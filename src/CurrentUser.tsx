import { CurrUser } from "./Interfaces";

const User0: CurrUser = {
    type: "Critic",
    id: "0",
    username: "Mr. Critique"
};
const User1: CurrUser = {
    type: "Manager",
    id: "1",
    username: "Mr. Manager"
};
const User2: CurrUser = {
    type: "Foodie",
    id: "2",
    username: "Mr. Fudge"
};
const userList: CurrUser[] = [User0, User1, User2];
export default userList;
