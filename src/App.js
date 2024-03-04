
const rfStyle = {
  backgroundColor: '#D0C0F7',
};

import WithReactOrganizationalChart from "./components/WithReactOrganizationalChart/index.js";
import WithReactFlowRenderer from "./components/WithReactFlowRenderer/index.js";
import WithD3OrgChart from "./components/WithD3OrgChart/index.js";
import WithReactD3Tree from "./components/WithReactD3Tree/index.js";

function Flow() {
  return (
    <WithReactD3Tree />
  );
  // return (
  //   <WithD3OrgChart />
  // );
  // return (
  //   <WithReactOrganizationalChart />
  // );
  // return (
  //   <WithReactFlowRenderer />
  // );
}

export default Flow;
