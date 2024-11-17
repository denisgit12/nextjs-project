
import {FC} from "react";

type PropsSet = {
    name:string,
    value: string
}

export const SetLocalStore:FC<PropsSet> = ({name, value}:{name:string, value:string})=> {
    localStorage.setItem(name, value);

    return true
}

