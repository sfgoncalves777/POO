import { Fighter } from './fighter';

export class Fight {
  private challenged: Fighter;
  private challenger: Fighter;
  private rounds: number;

  constructor(challenged: Fighter, challenger: Fighter, rounds: number) {
    this.challenged = challenged;
    this.challenger = challenger;
    this.rounds = rounds;
  }

  public getChallenged(): Fighter {
    return this.challenged;
  }

  public setChallenged(challenged: Fighter): void {
    this.challenged = challenged;
  }

  public getChallenger(): Fighter {
    return this.challenger;
  }

  public setChallenger(challenger: Fighter): void {
    this.challenger = challenger;
  }

  public getrounds() {
    return this.rounds;
  }

  public setrounds(rounds: number): void {
    this.rounds = rounds;
  }

  public toFight() {
    this.challenger.toPresent();
    console.log();
    this.challenged.toPresent();
    console.log();
    const resultFight = Math.floor(Math.random() * (3 - 0) + 0)
    switch (resultFight) {
      case 0:
        console.log('Empate!')
        this.challenger.drawFight();
        this.challenged.drawFight();
        break;
      case 1:
        console.log('O desafiante', this.challenger.getName(), 'venceu!');
        this.challenger.winFight();
        this.challenged.loseFight()
        break; 
      case 2:
        console.log('O desafiado', this.challenged.getName(), 'venceu!');
        this.challenged.winFight()
        this.challenger.loseFight();
        break; 
    }
  }
}