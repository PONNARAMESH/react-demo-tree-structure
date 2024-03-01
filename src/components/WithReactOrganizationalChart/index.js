import 'reactflow/dist/style.css';
import { dummyData } from "../../utils/sampleData.js"
import { Tree, TreeNode } from 'react-organizational-chart';
import "./styles.css";

function WithReactOrganizationalChart() {

  const tree = (items, id = null, link = 'parentId') => {
    return items
      .filter(item => item[link] === id)
      .map((item, index) => {
        if (id === null) {
          return (<Tree
            lineWidth={'2px'}
            lineColor={'blue'}
            lineBorderRadius={'10px'}
            label={<div className="nodeContainer">&#127968;{item.label}</div>}
          >
            {tree(items, item.id)}
          </Tree>)
        }
        return (
          <TreeNode label={<div className='nodeContainer' >&#127968;{item.label}</div>}>
            {tree(items, item.id)}
          </TreeNode>
        )
      })
  };

  return (
    <div>
      {tree(dummyData || [])}
    </div>
  );
}

export default WithReactOrganizationalChart;
