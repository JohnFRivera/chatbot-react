const Button = ({
  type = 'button',
  id,
  variant,
  className,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      id={id}
      className={
        'btn rounded-pill' +
        (variant ? ' btn-' + variant : '') +
        (className ? ' ' + className : '')
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
