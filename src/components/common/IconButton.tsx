import styles from "./IconButton.module.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  iconClass: string;
  isActive?: boolean;
  disabled?: boolean;
};

export default function IconButton(
  { onClick, children, isActive, disabled, iconClass }: Props
) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.button_active : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`icon ${iconClass}`}/>
      {children}
    </button>
  );
}
