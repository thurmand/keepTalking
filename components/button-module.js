import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

const labelData = {
  blue: "Abort",
  red: "Hold"
};

class ButtonModule extends React.Component {
  state = {
    buttonColor: "",
    buttonLabel: "",
    stripColor: "",
    instruction: null
  };

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Typography variant="display1" color="primary">
          On the Subject of The Button
        </Typography>
        <FormControl style={{ minWidth: 120 }}>
          <InputLabel htmlFor="button-color">Color</InputLabel>
          <Select
            value={this.state.buttonColor}
            onChange={this.handleSelect}
            inputProps={{
              name: "buttonColor"
            }}
          >
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="yellow">Yellow</MenuItem>
            <MenuItem value="red">Red</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: 120 }}>
          <InputLabel htmlFor="button-label">Label</InputLabel>
          <Select
            value={this.state.buttonLabel}
            onChange={this.handleSelect}
            inputProps={{
              name: "buttonLabel"
            }}
          >
            <MenuItem value="abort">Abort</MenuItem>
            <MenuItem value="detonate">Detonate</MenuItem>
            <MenuItem value="hold">Hold</MenuItem>
            <MenuItem value="press">Press</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: 120 }}>
          <InputLabel htmlFor="strip-color">Strip Color</InputLabel>
          <Select
            value={this.state.stripColor}
            onChange={this.handleSelect}
            inputProps={{
              name: "stripColor"
            }}
          >
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="yellow">Yellow</MenuItem>
            <MenuItem value="red">Red</MenuItem>
          </Select>
        </FormControl>
        {this.state.instruction && (
          <Typography variant="title">{`${this.state.instruction}`}</Typography>
        )}
      </div>
    );
  }
}

export default ButtonModule;
/*
{this.state.buttonColor === "blue" ||
this.state.buttonColor === "red" ? (
  <div>
    <Typography variant="title">
      {`Is the button labeled ${labelData[this.state.buttonColor]}`}
    </Typography>
    <Button variant="raised" color="primary">
      Yes
    </Button>
    <Button variant="raised" color="primary">
      No
    </Button>
  </div>
) : null}
 */
