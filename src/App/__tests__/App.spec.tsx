import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { RootState } from "store/reducers";

import App from "..";

describe("App component", () => {
  const initialState: Partial<RootState> = {
    user: { notifications: [], userdata: null }
  };
  const mockStore = configureStore();
  let wrapper: any;

  it("defines the component", () => {
    wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>
    );
    expect(wrapper).toBeDefined();
  });
});
