import shortid from 'shortid';

export function createShortId() {
  return shortid.generate();
}