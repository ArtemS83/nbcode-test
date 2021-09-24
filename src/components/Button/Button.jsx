import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ title, type, onClick, disabled }) => {
  return (
    <button
      data-testid="onClickFn"
      className={type === 'button' ? styles.buttonButton : styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'Click me',
  type: 'button',
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
