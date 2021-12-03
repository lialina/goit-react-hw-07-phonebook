import React from 'react';
import styles from './Container.module.css';
import ContainerProps from '../../interfaces/Container.interface';

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}