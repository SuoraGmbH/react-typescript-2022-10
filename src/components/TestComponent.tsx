import { TimeEntry } from "../types/TimeEntry";

interface Person {
  name: string;
  email: string;
}

type Loggable = string | Person | TimeEntry;

const logSomething = (value: Loggable) => {
  if (typeof value === "object") {
    if (value.hasOwnProperty("name") && value.hasOwnProperty("email")) {
      const person = value as Person;
      console.log("we have a person" + person.name);
    }
    console.log("Logging a person: " + value);
  } else {
    console.log(value);
  }
};

type MyType = string | ((name: string) => string);

const logString = (value: MyType) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value("Welt").toUpperCase());
  }
};

export const TestComponent: React.FunctionComponent = () => {
  logString("asdf");
  logString((name: string) => `Hallo, ${name}!`);

  const personWithBirthday = {
    name: "Hallo",
    email: "Welt",
    birthday: new Date(),
  };

  logSomething("test");
  logSomething({ name: "Florian", email: "test@example.com" });
  logSomething(personWithBirthday);

  return <div></div>;
};
