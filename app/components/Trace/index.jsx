import "./styles.scss";

export default function Trace({ color, margin }) {
  return (
    <div
      style={{ backgroundColor: color, margin: margin }}
      className="trace"
    ></div>
  );
}
