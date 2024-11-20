import React from "react";
import "./Bank.css";

// Define state and action types
type TodoState = {
  balance: number;
  depositAmount: number;
  withdrawAmount: number;
};

type TodoAction =
  | { type: "deposit"; amount: number }
  | { type: "withdraw"; amount: number }
  | { type: "check_balance" };

// Reducer function
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "deposit":
      return {
        ...state, // Keep the current state values
        balance: state.balance + action.amount, // Update only balance
      };

    case "withdraw":
      if (action.amount > state.balance) {
        alert("Insufficient funds!");
        return state;
      }
      return {
        ...state, // Keep the current state values
        balance: state.balance - action.amount, // Update only balance
      };

    case "check_balance":
      return state;

    default:
      throw new Error("Unknown action type");
  }
};

class Reduser_Bank extends React.Component<{}, TodoState> {
  state = { balance: 0, depositAmount: 0, withdrawAmount: 0 };

  dispatch = (action: TodoAction) => {
    this.setState((prevState) => todoReducer(prevState, action));
  };

  handleDeposit = () => {
    const { depositAmount } = this.state;
    if (depositAmount > 0) {
      this.dispatch({ type: "deposit", amount: depositAmount });
    } else {
      alert("Please enter a valid deposit amount.");
    }
  };

  handleWithdraw = () => {
    const { withdrawAmount } = this.state;
    if (withdrawAmount > 0) {
      this.dispatch({ type: "withdraw", amount: withdrawAmount });
    } else {
      alert("Please enter a valid withdraw amount.");
    }
  };

  handleCheckBalance = () => {
    this.dispatch({ type: "check_balance" });
    alert(`Your balance is: Rs. ${this.state.balance}`);
  };

  handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ depositAmount: parseFloat(e.target.value) });
  };

  handleWithdrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ withdrawAmount: parseFloat(e.target.value) });
  };

  render(): React.ReactNode {
    return (
      <div>
        <h1>Bank Operations using Reducer</h1>
        <div className="bankContainer">
          <div>
            <label>
              Deposit Amount:{" "}
              <input
                className="input"
                type="number"
                value={this.state.depositAmount}
                onChange={this.handleDepositChange}
                min="0"
              />
            </label>
            <br />
            <label>
              Withdraw Amount:{" "}
              <input
                className="input"
                type="number"
                value={this.state.withdrawAmount}
                onChange={this.handleWithdrawChange}
                min="0"
              />
            </label>
          </div>
          <div className="buttonContainer">
            <button className="button Deposit" onClick={this.handleDeposit}>
              Deposit
            </button>
            <button className="button Withdraw" onClick={this.handleWithdraw}>
              Withdraw
            </button>
            <button
              className="button Balance"
              onClick={this.handleCheckBalance}
            >
              Check Balance
            </button>
          </div>
        </div>

        <div>
          <h3>Current Balance: Rs. {this.state.balance}</h3>
        </div>
      </div>
    );
  }
}

export default Reduser_Bank;
