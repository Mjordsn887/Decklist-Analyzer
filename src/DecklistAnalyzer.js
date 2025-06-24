import React from "react";

function parseDecklists(text) {
  const lists = text.trim().split(/\n\s*\n/); // split by blank lines
  const cardMap = {};

  lists.forEach(list => {
    const lines = list.split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("//"));
    const uniqueCards = new Set();
    lines.forEach(line => {
      // format: "1 Card Name" or just "Card Name"
      const card = line.replace(/^\d+\s*/, "");
      uniqueCards.add(card);
    });
    uniqueCards.forEach(card => {
      if (!cardMap[card]) cardMap[card] = 0;
      cardMap[card]++;
    });
  });

  const totalDecks = lists.length;
  const data = Object.entries(cardMap).map(([card, count]) => ({
    card,
    count,
    percent: ((count / totalDecks) * 100).toFixed(1) + "%",
  }));
  data.sort((a, b) => b.count - a.count || a.card.localeCompare(b.card));

  return { data, totalDecks };
}

export default function DecklistAnalyzer({ decklists, setDecklists, setResults }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <textarea
        style={{ width: "100%", minHeight: 120, fontSize: 16, borderRadius: 8, padding: 8 }}
        value={decklists}
        placeholder={"Paste decklists from Moxfield, separated by a blank line.\nExample:\n1 Sol Ring\n1 Swamp\n...\n\n1 Sol Ring\n1 Dark Ritual\n..."}
        onChange={e => setDecklists(e.target.value)}
      />
      <button
        style={{ marginTop: 8, width: "100%", padding: 12, fontSize: 18, borderRadius: 8, background: "#222", color: "#fff", border: "none" }}
        onClick={() => setResults(parseDecklists(decklists))}
      >
        Analyze
      </button>
    </div>
  );
}
