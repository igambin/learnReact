import {useState} from "react";
import {ItemProps} from "../_types/itemProps.ts";

const EditItem = (props: ItemProps) => {

    const [changed, setChanged] = useState(false);
    const [name, setName] =
        useState(props?.item.name || "");

    return <li>
        <label>Name:</label>
        <input type={"text"}
               value={name}
               style={{backgroundColor: (changed?"lightskyblue":"white")}}
               onChange={(evt) => {
                   setName(evt.target.value);
                   setChanged(true);
               }}
               onBlur={() => setChanged(false)}
            />
    </li>

}

export default EditItem;