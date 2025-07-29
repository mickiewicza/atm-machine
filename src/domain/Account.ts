export class Account {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  withdraw(amount: number): void {
    if (isNaN(amount)) {
      throw new Error('Please enter a number');
    }

    if (amount <= 0) {
      throw new Error('Invalid withdraw amount');
    }

    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }

    this.balance -= amount;
  }

  deposit(amount: number): void {
    if (isNaN(amount)) {
      throw new Error('Please enter a number');
    }

    if (amount <= 0) {
      throw new Error('Invalid deposit amount');
    }

    this.balance += amount;
  }
}
