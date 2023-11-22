import { Fighter } from "./fighter";
import { Fight } from "./fight";

const fighterOne = new Fighter(
  'Pretty Boy',
  'França',
  31,
  1.75,
  68.9,
  11,
  2,
  1
);
const fighterTwo = new Fighter(
  'Putscript',
  'Brasil',
  29,
  1.68,
  57.8,
  14,
  2,
  3,
);

const fight = new Fight(fighterOne, fighterTwo, 3);
fight.toFight();