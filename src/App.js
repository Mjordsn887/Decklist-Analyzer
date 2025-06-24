import React, { useState } from "react";
import DecklistAnalyzer from "./DecklistAnalyzer";
import ResultsTable from "./ResultsTable";

function App() {
  const [decklists, setDecklists] = useState("");
  const [results, setResults] = useState(null);

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 16, fontFamily: "sans-serif" }}>
      <h2>Decklist Analyzer</h2>
      <DecklistAnalyzer
        decklists={decklists}
        setDecklists={setDecklists}
        setResults={setResults}
      />
      {results && <ResultsTable results={results} />}
    </div>
  );
}

export default App;
