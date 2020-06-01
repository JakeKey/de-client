import React from "react";
import { shallow } from "enzyme";

import { Login } from "../";

describe("Login component", () => {
  it("Handle states properly", () => {
    const userLoginMock = jest.fn();

    const wrapper = shallow(<Login userLogin={userLoginMock} />);
    const loginValue = "testlogin";
    const passwordValue = "testpass";
    wrapper.find({ name: "username" }).simulate("change", {
      target: { value: loginValue }
    });
    wrapper.find({ name: "password" }).simulate("change", {
      target: { value: passwordValue }
    });

    expect(wrapper.find({ name: "username" }).props().value).toEqual(
      loginValue
    );
    expect(wrapper.find({ name: "password" }).props().value).toEqual(
      passwordValue
    );
  });
});
