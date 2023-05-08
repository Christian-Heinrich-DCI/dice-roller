import { createContext, useState } from "react";

export const DiceContext = createContext();

const initalPool = {
    D4: 0,
    D6: 0,
    D8: 0,
    D10: 0,
    D20: 0,
    D100: 0,
};

export default function DiceContainer({ children }) {
    const [dicePool, setDicePool] = useState(initalPool);

    const reset = () => {
        setDicePool({ ...initalPool });
    };

    return (
        <DiceContext.Provider value={{ dicePool, setDicePool, reset }}>
            {children}
        </DiceContext.Provider>
    );
}
