import React from 'react';

const nameToColor = (name) => {
    const firstSymbolCode = name.charCodeAt(0)
    const opacity = 0.7
    const colorRange = 255
    const colorBase = ((firstSymbolCode - 65) % 25) / 25
    const pseudoRandom = (base) => (colorRange * base * 2) % 255
    const colorR = pseudoRandom(colorBase)
    const colorG = pseudoRandom(1 - colorBase)
    const colorB = pseudoRandom(Math.abs(colorBase - 0.5))
    
    return `rgba(${colorR}, ${colorG}, ${colorB}, ${opacity})`
}

export default function ToDoItem(props) {
    const {prItem} = props;
    const priority = (prItem.pr !== "Medium Priority") && <div className="item-priority">{prItem.pr}</div>

    return (
        <div className="item-container">
            <div className="item-some">
                <div className="some">
                    {priority}
                    <div className="item-date">01.01.2019</div>
                </div>
            </div>


            <div className="item-description">
                <div className="item-block">
                    <div className="item-icon"
                        style={{backgroundColor: nameToColor(prItem.name)}}>
                        {prItem.name[0]}
                    </div>
                    <div className="item-info">
                        <div className="item-name">{prItem.name}</div>
                        <div className="item-text">{prItem.description}</div>
                    </div>
                </div>
                <button className="item-button">⋮</button> 
            </div>
        </div>
    );
}
