import React, { useState } from 'react';
// } from './Checkbox';  // Adjust the import based on your file structure

interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: () => void;  // This is the type for a function that returns void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
    return (
        <label>
            {label}
            <input type="checkbox" checked={value} onChange={onChange} />
        </label>
    );
};

const CharacterSelection: React.FC = () => {
    const [checked, setChecked] = useState<{ [key: string]: boolean }>({ fighter: false, barbarian: false });

    const handleCheckChange = (key: string) => {
        setChecked(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div>
            <Checkbox
                label=""
                value={checked.fighter}
                onChange={() => handleCheckChange('fighter')}
            />
            {/* Repeat for other characters as needed */}
        </div>
    );
};

export default CharacterSelection;
