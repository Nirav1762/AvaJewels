import React, { useState } from 'react';
import '../main.css';

const DiamondShapeFilter = ({ onFilterChange }) => {
    const [selectedShapes, setSelectedShapes] = useState([]);

    const diamondShapes = [
        { name: 'Emerald', count: 6 },
        { name: 'Oval', count: 5 },
        { name: 'Pear', count: 4 },
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

export default DiamondShapeFilter;
