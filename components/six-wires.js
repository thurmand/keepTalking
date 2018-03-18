import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class SixWires extends React.Component {
  state = {
    showQuestionTwo: false,
    showQuestionThree: false
  };

  render() {
    return (
      <div>
        <div>
          Is the last digit odd and no yellow wires?
          <Button
            onClick={() => {
              this.props.sendInstruction("Cut the third wire");
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
            Is there exactly one yellow wire and multiple white wires?
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
                this.setState({ showQuestionThree: true });
              }}
            >
              No
            </Button>
          </div>
        )}
        {this.state.showQuestionThree && (
          <div>
            Are there any red wires?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the fourth wire");
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

export default SixWires;
