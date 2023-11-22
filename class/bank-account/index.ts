import { BankAccount } from './bank-account';

const bankAccount = new BankAccount('Silvani');

console.log('Dono:', bankAccount.getOwner());
console.log('Saldo:', bankAccount.getBalance());
console.log('Status', bankAccount.getStatus());
console.log();
bankAccount.openAccount();
console.log('Status', bankAccount.getStatus());
console.log();
bankAccount.deposit(1050);
console.log('Saldo:', bankAccount.getBalance());
console.log();
bankAccount.toWithdraw(2000);
console.log('Saldo:', bankAccount.getBalance());
console.log();
bankAccount.closeAccount();
console.log('Status', bankAccount.getStatus());
console.log();
bankAccount.toWithdraw(1000);
console.log('Saldo:', bankAccount.getBalance());
console.log();
bankAccount.payFare();
console.log('Saldo:', bankAccount.getBalance());
console.log();
bankAccount.closeAccount();
console.log('Status', bankAccount.getStatus());