import './App.css';
import {useState} from "react";

// @ts-expect-error TS2307: Cannot find module 'items_app/NestedApp' this is expected as NestedApp is a remote module
import NestedApp from "items_app/NestedApp";
function App() {

    const [page, setPage] = useState<string>("home")

    const HomeContent = () => <h2>Home Content</h2>;

    const RemoteListAppContent = () =>
        <>
            <h2>Items Content</h2>
            <NestedApp />
        </>;

    const renderContent = () => {
        switch(page) {
            case "items":
                return <RemoteListAppContent/>;
            default:
                return <HomeContent/>;
        }
    }

    return (
        <>
            <header>
                <h1>Welcome to My Website</h1>
            </header>

            <nav>
                <ul>
                    <li onClick={() => setPage("home")}>Home</li>
                    <li onClick={() => setPage("items")}>Items</li>
                </ul>
            </nav>

            <div className="content">
                {renderContent()}
            </div>

        </>
    )
}

export default App
