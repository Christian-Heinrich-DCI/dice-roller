import { useContext } from "react";
import { DiceContext } from "../context/DiceContainer";

export default function Dx({ size }) {
    const { dicePool, setDicePool } = useContext(DiceContext);

    return (
        <div className="dice__single__container">
            <button
                onClick={() => {
                    // 0 is minimum, don't decrease after that
                    if (dicePool[size] > 0) {
                        setDicePool({
                            ...dicePool,
                            [size]: dicePool[size] - 1,
                        });
                    }
                }}
            >
                -
            </button>
            <span>
                <strong>{size}</strong> | {dicePool[size]}x
            </span>
            <button
                onClick={() =>
                    setDicePool({
                        ...dicePool,
                        [size]: dicePool[size] + 1,
                    })
                }
            >
                +
            </button>
        </div>
    );
}
