import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.MutationObserver = class {
  constructor(callback) {} // eslint-disable-line no-unused-vars
  disconnect() {}
  observe(element, initObject) {} // eslint-disable-line no-unused-vars
  takeRecords() {
    return [];
  }
};
global.document.getSelection = function() {};

jest.mock("../../src/calendarReduxHooks", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));
