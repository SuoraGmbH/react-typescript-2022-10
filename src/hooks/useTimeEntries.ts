import { useState } from "react";
import { v4 } from "uuid";
import { NewTimeEntry, TimeEntry } from "../types/TimeEntry";

interface UseTimeEntriesReturn {
  timeEntries: TimeEntry[];
  logTime: (timeEntry: NewTimeEntry) => void;
}

export const useTimeEntries = (): UseTimeEntriesReturn => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    {
      id: "394ec61d-741d-411a-bdc7-e5a9c5efe53d",
      comment: "My first time entry",
      start: new Date("2022-10-18T08:00:00Z"),
      end: new Date("2022-10-18T09:00:00Z"),
    },
    {
      id: "b6daadc6-7bdf-44f3-8f82-4c6e9e281170",
      comment: "My second time entry",
      start: new Date("2022-10-18T11:00:00Z"),
      end: new Date("2022-10-18T12:00:00Z"),
    },
  ]);

  return {
    timeEntries,
    logTime: (timeEntry: NewTimeEntry) => {
      setTimeEntries((oldTimeEntries) => [
        ...oldTimeEntries,
        { ...timeEntry, id: v4() },
      ]);
    },
  };
};
