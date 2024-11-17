
import {FC} from "react";

type PropsSet = {
    name:string,
    value: string
}
type PropsGet = {
    name:string,
}
export const SetLocalStore:FC<PropsSet> = ({name, value}:{name:string, value:string})=> {
    localStorage.setItem(name, value);

    return true
}

export const GetLocalStore:FC<PropsGet> = ({name}:{name:string})=> {
    return localStorage.getItem(name)
}
