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

const saveMock = jest.fn();

describe("<ReminderDialog/>", () => {
  let componentWrapper;
  const initialProps = {
    open: true,
    handleClose: jest.fn(),
    handleActionButton: saveMock,
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
      const shortDescription = "lorem ipsum ";

      beforeEach(() => {
        const descriptionTextField = componentWrapper.find("#description");
        descriptionTextField.simulate("change", {
          preventDefault: jest.fn(),
          target: {
            value: shortDescription,
          },
        });
      });
      test("Text field value should change", () => {
        expect(componentWrapper.find("#description").prop("value")).toBe(
          shortDescription
        );
      });

      describe("And action button gets clicked", () => {
        it("Should start saving the reminder", () => {
          const description = componentWrapper
            .find("#description")
            .prop("value");
          const city = componentWrapper
            .find("#city-simple-select")
            .prop("value");
          const color = componentWrapper
            .find("#color-simple-select")
            .prop("value");

          const actionButton = componentWrapper.find("#action-button");
          actionButton.simulate("click");

          const reminder = {
            date: initialProps.initialDate.toDate(),
            description,
            city,
            color,
          };

          expect(saveMock).toBeCalledWith(reminder);
        });
      });
    });
  });
});
