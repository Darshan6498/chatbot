import { createContext, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {

        const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");



    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev+nextWord);

        },75*index)

    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }


    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(prompt); // Always set recentPrompt to the current prompt

        // Make API call to backend
        const response = await fetch('http://localhost:5000/api/gemini/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        const geminiResponse = data.text; // Assuming the backend sends back { text: "..." }

        let responseArray = geminiResponse.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }

        setLoading(false);
        setInput("");
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider;
