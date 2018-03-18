import React from "react";
import ButtonModule from "../components/button-module";
import SimpleWires from "../components/simple-wires";
class Index extends React.Component {
  render() {
    return (
      <div>
        <SimpleWires />
        <ButtonModule />
      </div>
    );
  }
}

export default Index;
