import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class FiveWires extends React.Component {
  state = {
    showQuestionTwo: false,
    showQuestionThree: false
  };

  render() {
    return (
      <div>
        <div>
          Is the last wire black and last digit odd?
          <Button
            onClick={() => {
              this.props.sendInstruction("Cut the fourth wire");
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              this.props.sendInstruction(null);
              this.setState({ showQuestionTwo: true });
            }}
          >
            No
          </Button>
        </div>
        {this.state.showQuestionTwo && (
          <div>
            Is there exactly one red wire and multiple yellow wires?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the first wire");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                this.props.sendInstruction(null);
                this.setState({ showQuestionThree: true });
              }}
            >
              No
            </Button>
          </div>
        )}
        {this.state.showQuestionThree && (
          <div>
            Are there no black wires?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the second wire");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the first wire");
              }}
            >
              No
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default FiveWires;
