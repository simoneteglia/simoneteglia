export default function ResultBar({ result, label }) {
  return (
    <div
      key={result}
      style={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, blueviolet, 60%,  #dac2f0)",
          height: "10px",
          width: result > 0.1 ? `${result * 100}%` : "5%",
          borderRadius: "10px",
        }}
      ></div>
      <p>{result.toString().slice(0, 6)}</p>
      <p
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "15px",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </p>
    </div>
  );
}
