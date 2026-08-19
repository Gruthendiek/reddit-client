require("@testing-library/jest-dom");
const Enzyme = require("enzyme");
const adapterModule = require("@cfaester/enzyme-adapter-react-18");
const Adapter = adapterModule.default || adapterModule;

Enzyme.configure({ adapter: new Adapter() });
