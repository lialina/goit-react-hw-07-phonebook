import React from 'react';
import styles from './Filter.module.css';

interface FilterProps {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}