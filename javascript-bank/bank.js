/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  if (!this.accounts.length) {
    return 0;
  }

  for (var y = 0; y < this.accounts.length; y++) {
    for (var z = 0; z < this.accounts[y].transactions.length; z++) {
      this.accounts[y].transactions[z].type === 'deposit' ? grandTotal += this.accounts[y].transactions[z].amount : grandTotal -= this.accounts[y].transactions[z].amount;
    }
  }
  return grandTotal;
};
