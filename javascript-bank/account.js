/* exported Account */

function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  this.amount = amount;
  if (Number.isInteger(this.amount) && this.amount > 0) {
    var depositTransaction = new Transaction('deposit', this.amount);
    this.transactions.push(depositTransaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  this.amount = amount;
  if (Number.isInteger(this.amount) && this.amount > 0) {
    var withdrawTransaction = new Transaction('withdrawal', this.amount);
    this.transactions.push(withdrawTransaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawTotal = 0;

  if (!this.transactions.length) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    this.transactions[i].type === 'deposit' ? depositTotal += this.transactions[i].amount : withdrawTotal += this.transactions[i].amount;
    var accountBalance = depositTotal - withdrawTotal;
  }
  return accountBalance;
};
