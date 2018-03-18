import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class FourWires extends React.Component {
  state = {
    showQuestionTwo: false,
    showQuestionThree: false,
    showQuestionFour: false
  };

  render() {
    return (
      <div>
        <div>
          Is there more than one red wire? last serial odd
          <Button // TODO: also depending onthe last serial number being odd
            onClick={() => {
              this.props.sendInstruction("Cut the last red wire");
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
            Is the last wire yellow and no red wires?
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
            Is there exactly one blue wire?
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
                this.setState({ showQuestionFour: true });
              }}
            >
              No
            </Button>
          </div>
        )}
        {this.state.showQuestionFour && (
          <div>
            Is there more then one yellow wire?
            <Button
              onClick={() => {
                this.props.sendInstruction("Cut the last wire");
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
        )}
      </div>
    );
  }
}

export default FourWires;
