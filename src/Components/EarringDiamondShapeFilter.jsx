import React, { useState } from 'react';
import '../main.css';

const EarringDiamondShapeFilter = ({ onFilterChange }) => {
    const [selectedShapes, setSelectedShapes] = useState([]);

    const diamondShapes = [
        { name: 'Emerald', count: 2 },
        { name: 'Oval', count: 2 },
        { name: 'Pear', count: 2 },
        { name: 'Round', count: 11 }
    ];

    const handleShapeToggle = (shape) => {
        const updatedShapes = selectedShapes.includes(shape)
            ? selectedShapes.filter((s) => s !== shape)
            : [...selectedShapes, shape];

        setSelectedShapes(updatedShapes);
        onFilterChange(updatedShapes);
    };

    return (
        <div className="shapeFilterContainer">
            <div className="shapeFilterSection">
                <div className="shapeFilterHeader">Diamond Shape</div>
                {diamondShapes.map((shape) => (
                    <label key={shape.name} className="shapeFilterCheckbox">
                        <input
                            type="checkbox"
                            checked={selectedShapes.includes(shape.name)}
                            onChange={() => handleShapeToggle(shape.name)}
                        />
                        {shape.name} <span className="count">({shape.count})</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default EarringDiamondShapeFilter;
