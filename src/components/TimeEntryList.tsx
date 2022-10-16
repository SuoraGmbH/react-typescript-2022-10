import { TimeEntryView } from "./TimeEntryView";
import { TimeEntry } from "../hooks/useTimeEntries";

interface Props {
  timeEntries: TimeEntry[];
}

export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {timeEntries.map((timeEntry) => (
          <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
        ))}
      </ul>
    </div>
  );
};
