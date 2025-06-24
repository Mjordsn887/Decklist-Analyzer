import React from "react";

export default function ResultsTable({ results }) {
  const { data, totalDecks } = results;

  return (
    <div>
      <h3>Results</h3>
      <div style={{ fontSize: 14, marginBottom: 8 }}>{totalDecks} decklists analyzed</div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th align="left">Card Name</th>
            <th>Decks</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.card}>
              <td>{row.card}</td>
              <td align="center">{row.count}</td>
              <td align="center">{row.percent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
