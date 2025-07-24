// src/App.tsx
import React, { useState } from 'react';
import ProductSelector from './components/ProductSelector';
import './App.css'; // assuming your header/footer/logo styles are here
import CreditCardForm from './components/CreditCardForm';
import InsuranceForm from './components/InsuranceForm';
import DebitCardForm from './components/DebitCardForm';
import LoanForm from './components/LoanForm';
import PensionForm from './components/PensionForm';

type ProductId = 'insurance' | 'debit-card' | 'credit-card' | 'loan';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductId | null>(null);

  const handleProductSelect = (productId: ProductId) => {
    setSelectedProduct(productId);
    console.log("Selected product:", productId);
    // Optionally: set up routing or display component conditionally
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
        <h1>WhiteHat Banking Group</h1>
      </header>

      {/* Main content */}
      <main>
        {!selectedProduct ? (
          <>
            <h2>Select a Product to Apply</h2>
            <ProductSelector onSelect={handleProductSelect} />
          </>
        ) : selectedProduct === 'insurance' ? (
          <InsuranceForm />
        ) : selectedProduct === 'debit-card' ? (
          <DebitCardForm />
        )  
        : selectedProduct === 'credit-card' ? (
          <CreditCardForm />
        ): selectedProduct === 'loan' ? (
          <LoanForm />
        ): selectedProduct === 'pension' ? (
          <PensionForm />
        )  : (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>You selected: {selectedProduct}</h2>
            <p>We'll load the form soon here...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2025 LLOYDS BANKING GROUP. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
