import { useState } from "react";
import { v4 } from "uuid";

export const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([
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
    logTime: (timeEntry) => {
      setTimeEntries((oldTimeEntries) => [
        ...oldTimeEntries,
        { id: v4(), ...timeEntry },
      ]);
    },
  };
};
