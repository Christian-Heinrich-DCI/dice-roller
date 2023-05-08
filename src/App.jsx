import DiceRoller from "./components/DiceRoller";
import DiceContainer from "./context/DiceContainer";
import "./App.css";

function App() {
    return (
        <>
            <DiceContainer>
                <DiceRoller />
            </DiceContainer>
        </>
    );
}

export default App;
