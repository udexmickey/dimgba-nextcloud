export interface FilterComponentProps {
    continentFilter: string; // Prop for continent filter value
    setContinentFilter: React.Dispatch<React.SetStateAction<string>>; // Function to set continent filter value
    hasStatesFilter: boolean | ""; // Prop for hasStates filter value
    setHasStatesFilter: React.Dispatch<React.SetStateAction<boolean | "">>; // Function to set hasStates filter value
  }