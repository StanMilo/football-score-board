import React, { useState } from "react";

const ScoreBoard = () => {
  const [scores, setScores] = useState({
    "Mexico - Canada": [0, 0],
    "Spain - Brazil": [0, 0],
    "Germany - France": [0, 0],
    "Uruguay - Italy": [0, 0],
    "Argentina - Australia": [0, 0]
  });

  const gameResults = {
    "Mexico - Canada": [0, 5],
    "Spain - Brazil": [10, 2],
    "Germany - France": [2, 2],
    "Uruguay - Italy": [6, 6],
    "Argentina - Australia": [3, 1]
  };
  
  const [summaryClicked, setSummaryClicked] = useState(false);

  const handleStart = (game) => {
    setScores({ ...scores, [game]: [0, 0] });
  };

  const handleUpdate = (game, homeScore, awayScore) => {
    setScores({ ...scores, [game]: [homeScore, awayScore] });
  };

  const showSummary = () => {
    const summary = Object.entries(gameResults)
      .map(([game, [homeScore, awayScore]]) => ({ game, homeScore, awayScore, totalGoals: homeScore + awayScore }))
      .sort((a, b) => b.totalGoals - a.totalGoals || Object.keys(gameResults).indexOf(b.game) - Object.keys(gameResults).indexOf(a.game));
    
    const summaryTable = (
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
            <th>Total Goals</th>
          </tr>
        </thead>
        <tbody>
          {summary.map(({ game, homeScore, awayScore, totalGoals }) => (
            <tr key={game}>
              <td>{game}</td>
              <td>
                {homeScore} : {awayScore}
              </td>
              <td>{totalGoals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
    setSummaryTable(summaryTable);
    setSummaryClicked(true);
  };
  
  
  


  const [summaryTable, setSummaryTable] = useState(null);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(scores).map((game) => (
            <tr key={game}>
              <td>{game}</td>
              <td>
                {scores[game][0]} : {scores[game][1]}
              </td>
              <td>
                <button onClick={() => handleStart(game)}>Start</button>
                <button onClick={() => handleUpdate(game, ...gameResults[game])}>
                  Update Score
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={showSummary}>Summary</button>
      {summaryClicked && summaryTable}
    </div>
  );
};

export default ScoreBoard;
