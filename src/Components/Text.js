import React, { Component } from "react";
import Popover from "@material-ui/core/Popover";
import CorrectDialog from "./CorrectDialog";
import { Typography } from "@material-ui/core";
class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      showPopup: false,
      correctedWord: "",
      anchorEl: null
    };
  }

  fixMistake = (e, word, i) => {
    console.log(i, word);
    this.setState({
      showPopup: true,
      anchorEl: e.currentTarget,
      showDialog: true,
      correctedWord: word
    });
  };

  handleClose = () => {
    this.setState({ showDialog: false, showPopup: false, anchorEl: null });
    this.props.reset();
  };
  render() {
    const transcript =
      this.props.transcript !== "" ? this.props.transcript.split(" ") : [];
    //console.log(transcript);
    let text = [];
    try {
      text = this.props.text.split(" ");
    } catch (e) {
      console.log(e);
    }
    const { showDialog, showPopup, correctedWord, anchorEl } = this.state;
    return (
      <div style={{ fontSize: 64, padding: "5%", paddingLeft: "30%" }}>
        {transcript.map((word, i) => {
          if (
            text[i] &&
            (word === (text[i].toLowerCase() || "") ||
              word + "." === (text[i].toLowerCase() || ""))
          ) {
            return (
              <span key={Math.random()} style={{ color: "green" }}>
                {(text[i] || "") + " "}
              </span>
            );
          } else {
            return (
              <span
                key={i}
                onClick={e => this.fixMistake(e, text[i], i)}
                style={{
                  color: "red",
                  borderWidth: 1,
                  borderColor: "red",
                  padding: 5,
                  cursor: "pointer"
                }}
              >
                {(text[i] || "") + " "}
                {/* <Popover
                  id="simple-popper"
                  open={showPopup}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  <div>{correctedWord}</div>
                </Popover> */}
              </span>
            );
          }
        })}
        {text.map((word, i) => {
          if (i === transcript.length) {
            return (
              <span key={Math.random()} style={{ color: "orange" }}>
                {word + " "}
              </span>
            );
          } else if (i > transcript.length) {
            return word + " ";
          }
        })}

        <CorrectDialog
          showDialog={showDialog}
          word={correctedWord}
          hideDialog={this.handleClose}
        />
      </div>
    );
  }
}

export default Text;
