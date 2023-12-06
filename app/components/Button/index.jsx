import "./styles.scss";

export default function Button({ text, icon = "" }) {
  return (
    <button>
      {text} {icon}
    </button>
  );
}
