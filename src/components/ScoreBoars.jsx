import React, { useState } from 'react';

function ScoreBoard() {
  const [matches, setMatches] = useState([
    { home: 'Mexico', away: 'Canada', homeScore: 0, awayScore: 5 },
    { home: 'Spain', away: 'Brazil', homeScore: 10, awayScore: 2 },
    { home: 'Germany', away: 'France', homeScore: 2, awayScore: 2 },
    { home: 'Uruguay', away: 'Italy', homeScore: 6, awayScore: 6 },
    { home: 'Argentina', away: 'Australia', homeScore: 3, awayScore: 1 },
  ]);

  return (
    <div>
      <h1>Football World Cup Score Board</h1>
      <table>
        <thead>
          <tr>
            <th>Home</th>
            <th>Away</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.home}</td>
              <td>{match.away}</td>
              <td>
                {match.homeScore} - {match.awayScore}
              </td>
              <td>
                <button>Finish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreBoard;
