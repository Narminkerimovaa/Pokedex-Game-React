import { pokemon } from "./../constants/pokemon";

export function distributePokemon() {
  let temp = [...pokemon];
  let team1 = [];
  let team2 = [];

  let toggle = true;

  while (temp.length > 0) {
    let index = Math.floor(Math.random() * temp.length);

    let picked = temp[index];

    if (toggle) {
      team1.push(picked);
    } else {
      team2.push(picked);
    }

    temp.splice(index, 1);
    toggle = !toggle;
  }

  return { team1, team2 };
}

export function calcXP(team) {
  return team.reduce((acc, curr) => acc + curr.base_experience, 0);
}

export function getWinner(t1, t2) {
  return t1 > t2 ? "team1" : "team2";
}
export const pad = (id) => `00${id}`.slice(-3);
