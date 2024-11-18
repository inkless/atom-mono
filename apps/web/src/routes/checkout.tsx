import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import reactLogo from '../assets/react.svg';
import './checkout.css';

export const Route = createFileRoute('/checkout')({
  component: CheckoutComponent,
});

function CheckoutComponent() {
  const [amount, setAmount] = useState('99.99');

  const finish = () => {
    alert(`Amount: ${amount}. Finish!`);
  };

  return (
    <div className="login-container">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Atom Checkout</h1>
      <div className="card">
        <label>Amount</label>
        <input
          type="text"
          pattern="[.0-9]*"
          value={amount}
          style={{ fontSize: 16 }}
          onChange={(evt) => {
            setAmount(evt.target.value);
          }}
        />
      </div>
      <div className="card">
        <button onClick={finish}>Finish</button>
      </div>
    </div>
  );
}
