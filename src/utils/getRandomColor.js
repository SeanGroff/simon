// @flow
import { colors } from '../constants';

/**
 * @function getRandomColor
 * @description Takes no parameters and returns a
 * random color ['green', 'yellow', 'blue', 'green']
 * @returns {string}
 */
export default function getRandomColor(): string {
  return colors[Math.floor(Math.random() * 4)];
}
