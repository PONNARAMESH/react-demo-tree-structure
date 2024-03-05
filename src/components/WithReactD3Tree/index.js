import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "../../api/org-chart.json";
// import { useCenteredTree } from "./helpers";
import { useCenteredTree } from "../../hooks/useCenteredTree";
import "./styles.css";
// import { IIconProps } from "@fluentui/react";

// const openTeams: IIconProps = { iconName: "TeamsLogo" };

const containerStyles = {
    width: "100vw",
    height: "100vh",
    background: "#eee",
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = (props) => {
    // console.log("##nodeDatum: ", nodeDatum);
    const {
        nodeDatum,
        toggleNode,
        foreignObjectProps,
        addChildren,
    } = props;
    return (
        <>
            <g className="node">
                {/* `foreignObject` requires width & height to be explicitly set. */}
                <foreignObject {...foreignObjectProps}>
                    <div
                        style={{ padding: "10px", borderRadius: "10px", }}
                        className="button"
                        variant="contained"
                    >
                        <div className="name"><pre>&#127968;  {nodeDatum.name}</pre></div>
                        <div className="buttonContainer">

                            <i
                                class='fas fa-edit editBtm'
                                style={{ fontSize: "24px", color: "white" }}
                                onClick={() => {
                                    alert('You have clicked on EDIT button')
                                }}
                            />
                            {nodeDatum.children && <i
                                class={nodeDatum?.__rd3t?.collapsed ? "fas fa-chevron-circle-down expandOrCollapseBtn" : "fas fa-chevron-circle-up expandOrCollapseBtn"}
                                style={{ fontSize: "24px", color: "white" }}
                                onClick={() => { toggleNode(); }}
                                disabled={!nodeDatum.children}
                            />}
                            <i
                                class="fa-regular fa-square-plus addNewChildBtn"
                                style={{ fontSize: "24px", color: "white" }}
                                onClick={() => {
                                    // alert('You have clicked on ADD NEW CHILD button');
                                    // addChildren([{ "name": "Myriel" }]);
                                    addChildren([
                                        {
                                            name: "sampleNode_" + Math.floor(Math.random() * 100),
                                            attributes: {
                                                age: 25,
                                            },
                                            children: [],
                                        }
                                    ]);
                                }}
                            />
                        </div>
                    </div>
                    {/* <IconButton iconProps={openTeams} ariaLabel="Close popup modal" /> */}
                </foreignObject>
                {nodeDatum.children && <circle r={5}></circle>}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 10 20"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg> */}
                {/* <IconButton iconProps={openTeams} ariaLabel="Close popup modal" /> */}

                {/* <div style={{width:"30px",height:"30px",background:"red", border:"1px solid black"}}>
+
        </div> */}
                {/* <svg class="svg-circleplus" viewBox="10 200 609 100">
  <circle cx="50" cy="50" r="15" fill="none" stroke-width="5"></circle>
  <line x1="32" y1="50" x2="67.5" y2="50" stroke-width="5"></line>
  <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5"></line>
  
</svg> */}
            </g>
        </>
    )
};

export default function WithReactD3Tree(props) {

    console.log("##props: ", props);
    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 300, y: 200 };
    const separation = { siblings: 2, nonSiblings: 2 };
    const foreignObjectProps = {
        width: nodeSize.x,
        y: -80,
        height: nodeSize.y,
        x: -150,
    };


    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={orgChartJson}
                translate={translate}
                draggable={true}
                nodeSize={{ x: 150, y: 350 }}
                separation={separation}
                transitionDuration="1000"
                pathFunc="step"
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                renderCustomNodeElement={(rd3tProps) => {
                    console.log("##rd3tProps: ", rd3tProps);
                    return renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, })
                }
                }
                // pathClassFunc={(params) => {
                //     console.log("##params: ", params)
                // }}
                orientation="vertical"
            // initialDepth={1}
            />
        </div>
    );
}
