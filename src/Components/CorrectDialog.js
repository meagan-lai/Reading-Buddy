import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Say from "react-say";
import Icon from "@material-ui/core/Icon";

class CorrectDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      say: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    if (this.state.say) {
      setTimeout(() => {
        this.setState({ say: false });
      }, 1000);
    }

    return (
      <div>
        <Dialog
          open={this.props.showDialog}
          onClose={this.props.hideDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Fix Mistake"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ fontSize: 24 }}
              id="alert-dialog-description"
            >
              Word: {this.props.word}
            </DialogContentText>

            {this.state.say ? <Say speak={this.props.word} /> : null}
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => this.setState({ say: true })}
              color="primary"
              autoFocus
            >
              <Icon>volume_up</Icon>
            </Button>
            <Button onClick={this.props.hideDialog} color="primary" autoFocus>
              Try Again
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CorrectDialog;
