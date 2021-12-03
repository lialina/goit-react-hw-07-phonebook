import React from 'react';
import styles from './Filter.module.css';
import FilterProps from '../../interfaces/Filter.interface';

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}