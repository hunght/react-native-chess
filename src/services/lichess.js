// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service
import fetch from 'isomorphic-fetch';

const HTTP_BASE_URL = 'https://en.lichess.org';

export const getDailyPuzzle = async () => {
  await fetch(`${HTTP_BASE_URL}/account/info`);

  fetch(`${HTTP_BASE_URL}/training/daily`, {
    headers: {
      Accept: 'application/vnd.lichess.v2+json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      const { id, fen, color, initialMove, lines } = res.puzzle;

      return {
        puzzleColor: color === 'white' ? 'w' : 'b',
        puzzleFen: fen,
        puzzleData: res.puzzle,
        ready: true
      };
    });
};
