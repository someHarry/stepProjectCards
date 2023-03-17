import {isToken, deleteToken} from "./Login.js";
import {buttonLogout} from "./constants.js"

function logout (){
    deleteToken();
    isToken();
}

export {logout}