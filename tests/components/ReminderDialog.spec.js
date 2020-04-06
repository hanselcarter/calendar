import { shallow } from "enzyme";
import React from "react";
import ReminderDialog from "Components/ReminderDialog";

jest.mock("../../src/services/forecast", () => ({
  fetchForecastByCityName: jest.fn().mockResolvedValue({
    skies: "",
    minTemp: "",
    maxTemp: "",
    temp: "",
    feelsLike: "",
  }),
}));

describe("<ReminderDialog/>", () => {
  let componentWrapper;
  const initialProps = {
    open: true,
    handleClose: jest.fn(),
    handleActionButton: jest.fn(),
    initialDate: {
      toDate: jest.fn().mockReturnValue("some date"),
    },
    closeButtonLabel: "close",
    actionButtonLabel: "action",
  };

  beforeEach(() => {
    componentWrapper = shallow(<ReminderDialog {...initialProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should match ReminderDialog snapshot", () => {
    expect(componentWrapper).toMatchSnapshot();
  });

  describe("When Text field description changes", () => {
    describe("And Text field  values has more than 30 characters ", () => {
      test("Text field value should not change", () => {
        const longDescription =
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
        const descriptionTextField = componentWrapper.find("#description");
        const initialValue = descriptionTextField.prop("value");
        descriptionTextField.simulate("change", {
          preventDefault: jest.fn(),
          target: {
            value: longDescription,
          },
        });

        expect(componentWrapper.find("#description").prop("value")).toBe(
          initialValue
        );
      });
    });

    describe("And Text field  values has less than 30 characters ", () => {
      test("Text field value should change", () => {
        const shortDescription = "lorem ipsum ";
        const descriptionTextField = componentWrapper.find("#description");

        descriptionTextField.simulate("change", {
          preventDefault: jest.fn(),
          target: {
            value: shortDescription,
          },
        });

        expect(componentWrapper.find("#description").prop("value")).toBe(
          shortDescription
        );
      });
    });
  });
});
