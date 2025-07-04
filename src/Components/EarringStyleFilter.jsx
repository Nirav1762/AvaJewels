import React, { useState } from 'react';
import '../main.css';

const EarringstyleFilter = ({ onFilterChange }) => {
    const [selectedStyles, setSelectedStyles] = useState([]);

    const diamondStyles = [
        { name: 'Hoops', count: 6 },
        { name: 'Studs', count: 5 }
    ];

    const handlestyleToggle = (style) => {
        const updatedStyles = selectedStyles.includes(style)
            ? selectedStyles.filter((s) => s !== style)
            : [...selectedStyles, style];

        setSelectedStyles(updatedStyles);
        onFilterChange(updatedStyles);
    };

    return (
        <div className="shapeFilterContainer">
            <div className="shapeFilterSection">
                <div className="shapeFilterHeader">Style</div>
                {diamondStyles.map((style) => (
                    <label key={style.name} className="shapeFilterCheckbox">
                        <input
                            type="checkbox"
                            checked={selectedStyles.includes(style.name)}
                            onChange={() => handlestyleToggle(style.name)}
                        />
                        {style.name} <span className="count">({style.count})</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default EarringstyleFilter;
