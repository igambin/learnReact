import './App.css'
import ItemsList from "./components/ItemsList.tsx";
import {Item} from "./_types/item.ts";

function App() {

    const data = [
        new Item("Car"),
        new Item("Picture"),
        new Item("Key"),
        new Item("Bottle"),
        new Item("Phone"),
    ]

    return <ItemsList items={data}/>
}

export default App
