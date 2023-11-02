import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useState } from "react";
import Country from "../utils/types/Country.type";
import { TableProps } from "../utils/types/table.type";

const TableComponent: React.FC<TableProps> = ({ data }) => {
    const [sortColumn, setSortColumn] = useState<keyof Country>("nameUn");
    const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
  
    const handleSort = (column: keyof Country) => {
      if (sortColumn === column) {
        setSortOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
      } else {
        setSortColumn(column);
        setSortOrder("ASC");
      }
    };
  
    const headers = [
      { label: "Name", column: "name" },
      { label: "Continent", column: "continent" },
      { label: "NameUn", column: "nameUn" },
      { label: "Code", column: "code" },
      { label: "Has States", column: "hasStates" },
    ] as const;
  
    const sortedData = [...data].sort((a, b) => {
        const columnA = a[sortColumn];
        const columnB = b[sortColumn];
      
        if (typeof columnA === 'string' && typeof columnB === 'string') {
          return sortOrder === "ASC"
            ? columnA.localeCompare(columnB)
            : columnB.localeCompare(columnA);
        } else {
          return 0; // Handle the case where columnA or columnB is not a string
        }
      });
      
  
    return (
      <Paper
        style={{
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TableContainer style={{ maxHeight: 600 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {headers.map((head) => (
                  <TableCell
                    key={head.label}
                    style={{ padding: "16px", fontSize: "16px", cursor: "pointer" }}
                    onClick={() => handleSort(head.column)}
                  >
                    {head.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((country) => (
                <TableRow key={country.id}>
                  <TableCell style={{ padding: "8px 16px", fontSize: "14px" }}>
                    {country.name}
                  </TableCell>
                  <TableCell style={{ padding: "8px 16px", fontSize: "14px" }}>
                    {country.continent}
                  </TableCell>
                  <TableCell style={{ padding: "8px 16px", fontSize: "14px" }}>
                    {country.nameUn}
                  </TableCell>
                  <TableCell style={{ padding: "8px 16px", fontSize: "14px" }}>
                    {country.code}
                  </TableCell>
                  <TableCell style={{ padding: "8px 16px" }}>
                    {country.hasStates ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  };
  
  export default TableComponent;
  