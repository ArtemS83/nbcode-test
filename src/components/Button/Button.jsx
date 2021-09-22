import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ title, type, onClick }) => {
  return (
    <button
      className={type === 'button' ? styles.buttonButton : styles.button}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'Click me',
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;