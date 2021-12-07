import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | boolean | string
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}