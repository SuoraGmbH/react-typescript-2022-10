import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";

const initialFormData = { comment: "", start: "", end: "" };

const isFormDataValid = (formData) => {
  if (formData.comment === "") {
    return false;
  }

  const start = new Date(formData.start);
  const end = new Date(formData.end);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return false;
  }

  return start <= end;
};

export const TimeEntryForm = ({ onLogTime }) => {
  const [formData, setFormData] = useState(initialFormData);

  const isValid = isFormDataValid(formData);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!isValid) {
          return;
        }
        onLogTime({
          ...formData,
          start: new Date(formData.start),
          end: new Date(formData.end),
        });
        setFormData(initialFormData);
      }}
      className="space-y-8 divide-y divide-gray-200 px-4"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create time entry
            </h3>
          </div>

          <InputWithLabel
            field="comment"
            label="Comment"
            value={formData}
            onChange={setFormData}
            type="text"
          />
          <InputWithLabel
            field="start"
            label="Start"
            value={formData}
            onChange={setFormData}
            type="datetime-local"
          />
          <InputWithLabel
            field="end"
            label="End"
            value={formData}
            onChange={setFormData}
            type="datetime-local"
          />
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
