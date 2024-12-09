function ATM() {
    let balance = 1000;
  
    let withdrawalAmount = prompt("Enter the amount you want to withdraw:");
  
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      alert("Not enough money.");
      return;
    }
  
    if (withdrawalAmount > balance) {
      alert("Not enough money");
    } else {
      balance -= withdrawalAmount;
      alert(`You have withdrawn $${withdrawalAmount}. Remaining balance: $${balance}.`);
    }
  }
  
  ATM();
  