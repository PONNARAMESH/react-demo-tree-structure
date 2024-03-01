const chars = "ancdefghijklmnopqrstuvwxyz123456";

export function generateRandomId(length = 5) {
    const id = '';
    for (let i = 0; i < 5; i++) {
        id += chars.at(Math.floor(Math.random() * 10));
    }
    return id;
}

// {
//     id: "1",
//     label: "ABC company",
//     percentage: null, //
//     parentId: null, //
// }

export function createNode(nodeInfo, x, y) {
    return {
        id: `node_${nodeInfo.id}`,
        // type: 'group',
        data: {
            label: <div className="companyInfoContainer">
                &#127968; {nodeInfo.label}
            </div>
        },
        position: { x, y },
        style: {
            //   width: 170,
            //   height: 140,
            backgroundColor: 'red'
        },
    }
}

export function createEdge(nodeInfo) {
    return {
        id: `edge_${nodeInfo.id}`,
        source: `node_${nodeInfo.parentId}`,
        target: `node_${nodeInfo.id}`,
        label: nodeInfo.percentage,
        type: 'step'
    }
}

export function findChildrens(parentNode, allNodes) {

}

export function generateOrganizedTreeData(arrayData) {
    if (!arrayData || !Array.isArray(arrayData)) {
        return [];
    }

    //fint root node
    const rootNodeIndex = arrayData.findIndex(obj => !obj.parentId);
    if (!rootNodeIndex) return [];
    const rootNode = arrayData.splice()
}

export function generateGraphData(rawData) {
    const nodes = [], edges = [];
    if (!rawData || !Array.isArray(rawData)) {
        return {
            nodes,
            edges,
        };
    }

    const duplicatedRawData = [...rawData];
    let x = 200, y = 100;
    const depth = 1;

    const tree = (items, depth, parentInfo = null, id = null, link = 'parentId') => {
        // console.log("parentInfo:", parentInfo)
        // return items
        //     .filter(item => item[link] === id)
        //     .forEach((item, index) => {
        //         nodes.push(createNode(item, x * index, y * depth));
        //         if (id) {
        //             edges.push(createEdge(item));
        //         }
        //         tree(items, depth + 1, item.id)
        //     });
        const childrens = items
            .filter(item => item[link] === id);
        let initialPositionforX,initialPositionforY;

        if(!id) {
            initialPositionforX = 200;
            initialPositionforY = 100;
        // } else if(parentInfo.x > 0) {
        } else {
            initialPositionforX = parentInfo?.x;
            initialPositionforY = parentInfo?.y + 100;
        }


        childrens.forEach((item, index) => {
            const newNodeInfo = {
                ...item,
                x: initialPositionforX,
                y: initialPositionforY,
            };
            console.log(parentInfo, createNode(newNodeInfo, initialPositionforX + 200 * index, initialPositionforY))
            nodes.push(createNode(newNodeInfo, initialPositionforX + 200 * index, initialPositionforY));
            if (id) {
                edges.push(createEdge(newNodeInfo));
            }
            tree(items, depth + 1, newNodeInfo, item.id)
        });
    }

    // const tree = (items, id = null, parentInfo = {}, depth = 1, x = 200, y = 200, link = 'parent_id') => {
    //     let startingPositionForX = x; 
    //     let startingPositionForY = y,

    //     if(id) {

    //     }
    //     return items
    //         .filter(item => item[link] === id)
    //         .map((item, index) => {
    //             return {
    //                 ...item,
    //                 x: x,
    //                 y,
    //                 children: nest(items, item.id, parentInfo)
    //             }
    //         })
    // };

    const result = tree(rawData, depth);
    console.log("###treeData: ", result);

    //fint root node
    // const rootNodeIndex = duplicatedRawData.findIndex(obj => !obj.parentId);
    // if(!rootNodeIndex) return [];

    // const rootNode = duplicatedRawData.splice(rootNodeIndex, 1);
    // nodes.push(createNode(rootNode, x, y));

    // let i = 0;
    // let depth = 1;
    // const horizantalGapFromNodeToNode = 150;
    // const verticalGapFromNodeToNode = 70;

    // for(i; i < duplicatedRawData.length; i++){

    //     const childrens = duplicatedRawData.filter(obj => obj?.parentId === rootNode?.parentId);
    //     if(!childrens.length) return;

    //     for(let j=0; j < childrens.length; j++){
    //         const dataIndex = duplicatedRawData.findIndex(obj => obj?.parentId === childrens[j]?.parentId);


    //     }

    //     nodes.push(createNode(obj));

    //     if(rawData.parentId){
    //         edges.push(createEdge(obj));
    //     }
    // }
    return {
        nodes,
        edges,
    }
}