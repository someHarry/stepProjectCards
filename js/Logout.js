import {isToken, token} from "./Login";

function logout (){
    localStorage.removeItem("token");
    isToken(token);
}