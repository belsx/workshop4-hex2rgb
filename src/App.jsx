import { useState } from "react";

function App() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState ("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setHex(value);

    // Проверяем, что введено 7 символов, включая #
    if (value.length === 7) {
      if (isValidHex(value)) {
        const rgbValue = hexToRgb(value);
        setRgb(rgbValue);
        setError("");
        document.body.style.backgroundColor = value;
      } else {
        setError("Неверный формат HEX");
        setRgb(null);
        document.body.style.backgroundColor = "";
      }
    } else {
      setError("");
      setRgb(null);
    }
  };

  // Функция проверки корректности HEX-цвета
  const isValidHex = (hex) => {
    return /^#[0-9A-Fa-f]{6}$/.test(hex);
  };

  // Конвертер HEX в RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        value={hex}
        onChange={handleInputChange}
        placeholder="#FFFFFF"
        maxLength={7}
        style={{
          padding: "10px",
          fontSize: "16px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {rgb && <p style={{ marginTop: "10px", fontSize: "18px" }}>RGB: {rgb}</p>}
      {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
