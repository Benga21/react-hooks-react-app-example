import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  // This checks that the time is not in the document
  expect(
    screen.queryByText(/^\w+ \d{1,2}[a-z]{2} \d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)$/)
  ).not.toBeInTheDocument();
  
  // This checks that "Now" is present in the document
  expect(screen.getByText("Now")).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  // This checks that "Whoa!" is rendered in the document
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  // This checks that an element with title "time video" is rendered in the document
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});
