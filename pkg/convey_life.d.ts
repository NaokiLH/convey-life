/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead,
  Alive,
}
/**
*/
export class Universe {
  free(): void;
/**
* @returns {Universe}
*/
  static new(): Universe;
/**
*/
  reset(): void;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  cells(): number;
/**
* @returns {string}
*/
  render(): string;
/**
* @param {number} row
* @param {number} col
*/
  toggle_cell(row: number, col: number): void;
/**
* Set the width of the universe.
*
* Resets all cells to the dead state.
* @param {number} width
*/
  set_width(width: number): void;
/**
* Set the height of the universe.
*
* Resets all cells to the dead state.
* @param {number} height
*/
  set_height(height: number): void;
/**
*/
  tick(): void;
}
