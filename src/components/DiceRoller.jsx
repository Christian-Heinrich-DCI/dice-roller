import { useContext, useState } from "react";
import Dx from "./Dx";
import "./DiceRoller.css";
import { DiceContext } from "../context/DiceContainer";

function rnd(max) {
    return Math.floor(Math.random() * max + 1); // The maximum is inclusive and the minimum is inclusive
}

export default function DiceRoller() {
    const { dicePool, reset } = useContext(DiceContext);
    const [rollResult, setRollResult] = useState({});

    const rollDice = () => {
        const rollObj = {};
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

    return (
        <>
            <h2>Dice Roller</h2>
            {/* {Object.keys(emptyPool).map((key) => console.log(key))} */}
            <Dx size={"D4"} />
            <Dx size={"D6"} />
            <Dx size={"D8"} />
            <Dx size={"D10"} />
            <Dx size={"D20"} />
            <Dx size={"D100"} />
            <div>
                <button
                    onClick={() => {
                        reset();
                        setRollResult({});
                    }}
                >
                    RESET
                </button>
                <button onClick={rollDice}>ROLL</button>
            </div>
            <div>{JSON.stringify(rollResult)}</div>
        </>
    );
}