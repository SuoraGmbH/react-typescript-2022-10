/*
export interface NewTimeEntry {
  comment: string;
  start: Date;
  end: Date;
}

export interface TimeEntry extends NewTimeEntry {
  id: string;
}
*/

export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export type NewTimeEntry = Omit<TimeEntry, "id">;
