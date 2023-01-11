import React from "react";

// Update tag and version and package.json to reflect the current build
export default class Version extends React.Component {
    render() {
        const tag = 'ALPHA'
        const version = '0.1.1'
        return(
            <p>V. {tag}-{version}</p>
        )
    }
}