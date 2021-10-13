import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
