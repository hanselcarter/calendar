import { shallow } from "enzyme";
import React from "react";

import Calendar from "Components/calendar";

describe("<Calendar/>", () => {
  it("something", () => {
    let wr = shallow(<Calendar />);
    console.log(wr.debug());
  });
});
