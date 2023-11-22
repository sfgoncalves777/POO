export class BankAccount {
  private owner: string;
  private balance: number;
  private status: boolean;

  constructor(owner: string) {
    this.owner = owner;
    this.balance = 0;
    this.status = false;
  }

  public getOwner(): string {
    return this.owner;
  }

  public setOwner(owner: string): void {
    this.owner = owner;
  }

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(balance: number): void {
    this.balance = balance;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public openAccount(): void {
    this.setStatus(true);
  }

  public closeAccount(): void {
    if(this.getBalance()) {
      return console.log('Não é possível fechar a conta, pois o saldo não está zerado.');
    }
    this.setStatus(false);
  }

  public deposit(value: number): void {
    this.setBalance(this.getBalance() + value);
  }

  public toWithdraw(value: number): void {
    if (this.getBalance() < value) {
      return console.log('Não têm saldo disponível');
    }
    this.setBalance(this.getBalance() - value);
  }

  public payFare(): void {
    this.setBalance(this.getBalance() - 50);
  }
};
