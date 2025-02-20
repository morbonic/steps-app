import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevClick() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextClick() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button handler={handlePrevClick} txtColor="#fff" bgColor="#7950f2">
              ⏮️ Previous
            </Button>
            <Button handler={handleNextClick} txtColor="#fff" bgColor="#7950f2">
              Next ⏭️
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ txtColor, bgColor, handler, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      onClick={handler}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
