import { shallow } from "enzyme";
import React from "react";
import Calendar from "Components/Calendar";

const mockStore = {
  remindersReducer: {
    reminders: [],
    isLoading: true,
  },
};

const mockDispatch = jest.fn();

jest.mock("calendarReduxHooks", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn().mockImplementation((callback) => callback(mockStore)),
}));

describe("<Calendar/>", () => {
  it("something", () => {
    let wr = shallow(<Calendar />);
    console.log(wr.debug());
  });
});
