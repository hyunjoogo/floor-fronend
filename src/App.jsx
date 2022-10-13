import React from "react";
import TextInput from "./component/TextInput";

function App() {
    const joo = () => {
        console.log("joo");
    };

    return (
        <div className="App">
            <header>나는 헤더라고 합니다.</header>
            <nav>저는 네비요</nav>
            <div>
                <main>
                    <TextInput/>
                </main>
                <footer>
                  푸터터터
                </footer>
            </div>

        </div>
    );
}

export default App;
