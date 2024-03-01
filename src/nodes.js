const nodes = [
  {
    id: 'A',
    // type: 'group',
    data: {
      label: <div className="companyInfoContainer">
        &#127968; ABC company
      </div>
    },
    position: { x: 0, y: 0 },
    // style: {
    //   width: 170,
    //   height: 140,
    // },
  },
  {
    id: 'B',
    // type: 'input',
    data: { label: 'child node 1' },
    position: { x: -80, y: 100 },
    parentNode: 'A',
    // extent: 'parent',
  },
  {
    id: 'C',
    data: { label: 'child node 2' },
    position: { x: 80, y:100 },
    parentNode: 'A',
    // extent: 'parent',
  },
  {
    id: 'D',
    data: { label: 'child node 2' },
    position: { x: 0, y: 200 },
    // parentNode: 'A',
    // extent: 'parent',
  },
];

export default nodes;
