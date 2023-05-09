import { useContext, useState } from "react";
import { DiceContext } from "../context/DiceContainer";
import Dx from "./Dx";
import "./DiceRoller.css";

function rnd(max) {
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * max + 1);
}

export default function DiceRoller() {
    const { dicePool, reset } = useContext(DiceContext);
    const [rollResult, setRollResult] = useState({});

    const handleRoll = () => {
        const rollObj = {}; // temporary object for next state
        Object.keys(dicePool).forEach((dieSize) => {
            if (dicePool[dieSize] > 0) {
                const max = parseInt(dieSize.replace("D", ""));
                const rolls = [];
                for (let i = 0; i < dicePool[dieSize]; i++) {
                    const rndRoll = rnd(max);
                    rolls.push(rndRoll);
                }
                rollObj[dieSize] = rolls;
            }
        });
        setRollResult(rollObj);
    };

    const handleReset = () => {
        reset(); // resets Context state dicePool
        setRollResult({}); // resets rolled numbers
    };

    return (
        <>
            <h1>Dice Roller</h1>
            <header>
                {/* Generating UI for different die sizes */}
                {Object.keys(dicePool).map((size, index) => (
                    <Dx key={index} size={size} />
                ))}
            </header>
            <main>
                <button onClick={handleReset}>RESET</button>
                <button onClick={handleRoll}>ROLL</button>
            </main>
            <footer>{JSON.stringify(rollResult)}</footer>
        </>
    );
}
