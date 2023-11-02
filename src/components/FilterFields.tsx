import React from 'react';

interface FilterFieldsProps {
  continents: string[];
}

const FilterFields: React.FC<FilterFieldsProps> = ({ continents }) => {
  return (
    <div>
      <label>
        Continent:
        <select>
          <option value="">All</option>
          {continents.map(continent => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterFields;
