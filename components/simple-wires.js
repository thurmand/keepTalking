import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import ThreeWires from "./three-wires";
import FourWires from "./four-wires";
import FiveWires from "./five-wires";
import SixWires from "./six-wires";

class SimpleWires extends React.Component {
  state = {
    wireCount: "",
    instruction: null
  };

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setInstruction = instruction => {
    this.setState({ instruction: instruction });
  };

  resetState = () => {
    this.setState({ wireCount: "", instruction: null });
  };

  render() {
    return (
      <div>
        <Typography variant="display1" color="primary">
          On the Subject of Wires
        </Typography>

        <FormControl style={{ minWidth: 120 }}>
          <InputLabel htmlFor="wire-count">Wire Count</InputLabel>
          <Select
            value={this.state.wireCount}
            onChange={this.handleSelect}
            inputProps={{
              name: "wireCount"
            }}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={this.resetState}>clear</Button>

        {this.state.wireCount == 3 && (
          <ThreeWires sendInstruction={this.setInstruction} />
        )}

        {this.state.wireCount == 4 && (
          <FourWires sendInstruction={this.setInstruction} />
        )}

        {this.state.wireCount == 5 && (
          <FiveWires sendInstruction={this.setInstruction} />
        )}

        {this.state.wireCount == 6 && (
          <SixWires sendInstruction={this.setInstruction} />
        )}

        {this.state.instruction && (
          <Typography variant="title" color="primary">{`${
            this.state.instruction
          }`}</Typography>
        )}
      </div>
    );
  }
}

export default SimpleWires;
