import * as React from "react";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Byebye extends React.Component<{}, {}> {
    render() {
        return <h1>Byebye from NEWS!</h1>;
    }
}
