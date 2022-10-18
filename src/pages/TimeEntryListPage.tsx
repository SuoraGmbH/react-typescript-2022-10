import { TimeEntryList } from "../components/TimeEntryList";
import { useTimeEntries } from "../hooks/useTimeEntries";
import { TimeEntryForm } from "../components/TimeEntryForm";
import { TestComponent } from "../components/TestComponent";

export const TimeEntryListPage: React.FunctionComponent = () => {
  const { timeEntries, logTime } = useTimeEntries();

  return (
    <div>
      <TestComponent />
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          Time Entries
        </h1>
      </div>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm onLogTime={logTime} />
    </div>
  );
};
