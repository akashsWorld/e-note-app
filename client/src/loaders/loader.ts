import getData from "constants/dummy-backend"
import { redirect } from "react-router-dom";

export const userPageLoader= async ()=>{
    const data = await getData();

    if(data===null){
        return redirect('/home');
    }

    return data;
}