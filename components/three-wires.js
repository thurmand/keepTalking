import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class ThreeWires extends React.Component {
  state = {
    showQuestionTwo: false,
    showQuestionThree: false
  };

  render() {
    return (
      <div>
        <div>
          Are there any red wires?
          <Button
            onClick={() => {
              this.props.sendInstruction(null);
              this.setState({ showQuestionTwo: true });
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              this.props.sendInstruction("Cut the second wire");
            }}
          >
            No
          </Button>
        </div>
        {this.state.showQuestionTwo && (
          <div>
            Is the last wire white?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the last wire");
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
            Is there more than one blue wire?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the last blue wire");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the last wire");
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

export default ThreeWires;
