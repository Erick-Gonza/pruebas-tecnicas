
const Button = ({ value, styles, type, handleClick }) => {
  return (
    <input className={styles} value={`${value}`} type={type} onClick={() => handleClick(value)} />
  )
}

export default Button
