export interface DayObjectInterface extends Record<string, unknown> {
  name: string;
  value: string;
}

export interface DropdownInterface extends Record<string, unknown> {
  name: string;
  value: string;
}

export interface PaginationOnChange {
  selected: number;
}
