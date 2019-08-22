import React, { PropTypes, Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import FlipPage from "react-flip-page";
import Paper from "@material-ui/core/Paper";

import Icon from "@material-ui/core/Icon";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Text from "./Components/Text";
import { styles } from "./styles";

import logo from "./assets/logo2.png";
import page1 from "./assets/page1.png";
import page2 from "./assets/page2.png";
import page3 from "./assets/page3.png";

import { XYPlot, XAxis, YAxis, LineSeries, RadialChart } from "react-vis";

import { Typography } from "@material-ui/core";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      activePage: 0
    };
  }

  nextPage = reset => {
    reset();
    this.flipPage.gotoNextPage();
    this.setState({
      activePage: this.state.activePage + 1
    });
  };

  prevPage = reset => {
    reset();
    this.flipPage.gotoPreviousPage();
    this.setState({
      activePage: this.state.activePage - 1
    });
  };
  tabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const winH = 0.75 * window.innerHeight,
      winW = 1 * window.innerWidth;
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div style={styles.app.container}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            borderTop: "30px solid #F06E3A"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 25
            }}
          >
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#F06E3A",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              R
            </Typography>

            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#F3D540",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              E
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#547896",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              A
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#51ABC6",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              D
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#F18B8A",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              I
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#F5A570",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              N
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Neucha, cursive",
                color: "#51ABC6",
                fontSize: 40,
                textDecoration: "none",
                paddingLeft: 5
              }}
            >
              G
            </Typography>
            <Typography
              style={{
                display: "flex",
                fontFamily: "Open Sans , sans-serif",
                fontWeight: 700,
                fontSize: 26,
                color: "#514d4d",
                textDecoration: "none",
                paddingLeft: 10,
                alignItems: "flex-end",
                paddingBottom: 10
              }}
            >
              BUDDY
            </Typography>
          </div>

          <Tabs
            value={this.state.value}
            onChange={this.tabChange}
            style={{
              backgroundColor: "white"
            }}
            centered
            textColor="primary"
          >
            <Tab
              label="  Storybook  "
              style={{
                fontFamily: "Cantarell, sans-serif",
                color: "#514d4d",
                fontWeight: 700
              }}
            />
            <Tab
              label="  Analytics  "
              style={{
                fontFamily: "Cantarell, sans-serif",
                color: "#514d4d",
                fontWeight: 700
              }}
            />
          </Tabs>
        </AppBar>

        {this.state.value === 0 && (
          <div
            style={{ width: "80%", paddingLeft: "10%", paddingRight: "10%" }}
          >
            <FlipPage
              style={styles.app.book}
              ref={c => {
                this.flipPage = c;
              }}
              flipOnTouch={true}
              orientation="horizontal"
              animationDuration={1000}
              onPageChange={() => resetTranscript()}
              perspective="80em"
              maskOpacity={0.1}
              width="100%"
              showHint={true}
              showTouchHint={true}
            >
              <article style={styles.app.articles}>
                <Paper
                  elevation={0}
                  style={{
                    flexGrow: 1,
                    width: "50%",
                    background: "transparent"
                  }}
                >
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    text="The dog chased the cat around the house."
                  />
                </Paper>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyConent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={page1}
                    alt=""
                    style={{ width: "80%", padding: "5%" }}
                  />
                </div>
              </article>
              <article style={styles.app.articles}>
                <Paper
                  elevation={0}
                  style={{
                    flexGrow: 1,
                    width: "50%",
                    background: "transparent"
                  }}
                >
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    style={{ alignTe: "center" }}
                    text="The cat ran up the tree to get away from the dog."
                  />
                </Paper>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyConent: "flex-start"
                  }}
                >
                  <img
                    src={page2}
                    alt=""
                    style={{ width: "80%", padding: "5%" }}
                  />
                </div>
              </article>
              <article style={styles.app.articles}>
                <Paper
                  elevation={0}
                  style={{
                    flexGrow: 1,
                    width: "50%",
                    background: "transparent"
                  }}
                >
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    text="This let the mouse run away."
                  />
                </Paper>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyConent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={page3}
                    alt=""
                    style={{ width: "80%", padding: "5%" }}
                  />
                </div>
              </article>
            </FlipPage>

            {/* <button onClick={resetTranscript}>Try Again</button> */}
            {/*<div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: 5,

                borderTop: "10px solid white"
              }}
            >
              <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={this.state.activePage}
                style={styles.app.bookBar}
                backButton={
                  <Button
                    size="small"
                    onClick={() => this.prevPage(resetTranscript)}
                    disabled={this.state.activePage === 0}
                  >
                    Back
                  </Button>
                }
                nextButton={
                  <Button
                    size="small"
                    onClick={() => this.nextPage(resetTranscript)}
                    disabled={this.state.activePage === 2}
                  >
                    Next
                  </Button>
                }
              />
              </div>*/}
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10,
            backgroundColor: "white"
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#F06E3A",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            W
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#F3D540",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            E
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#547896",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            L
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#51ABC6",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            C
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#F5A570",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            O
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#F18B8A",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            M
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans, sans-serif",
              color: "#547896",
              fontSize: 40,
              textDecoration: "none",
              fontWeight: 700,
              paddingLeft: 5
            }}
          >
            E
          </Typography>
        </div>

        {this.state.value === 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#b7def7",
              margin: 20
            }}
          >
            <List
              component="nav"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <ListItem button>
                <Icon fontSize="large">short_text</Icon>
                <div style={{ fontSize: 24 }}>
                  Number of words attempted: 89
                </div>
              </ListItem>
              <ListItem button>
                <Icon fontSize="large" style={{ color: "green" }}>
                  check
                </Icon>

                <div style={{ fontSize: 24 }}>
                  Number of words correctly read: 80
                </div>
              </ListItem>
              <ListItem button>
                <Icon fontSize="large" style={{ color: "red" }}>
                  close
                </Icon>

                <div style={{ fontSize: 24 }}>
                  Number of words incorrectly read: 9
                </div>
              </ListItem>
            </List>
            <RadialChart
              width={400}
              height={400}
              stroke="black"
              ç
              data={[
                { angle: 89, label: "Words Read" },
                { angle: 80, color: "rgb(95, 204, 113)", label: "Correct" },
                { angle: 9, color: "rgb(255, 0, 0)", label: "Incorrect" }
              ]}
            />
            <XYPlot strokeWidth={4} width={500} height={500}>
              <LineSeries
                data={[
                  { x: 1, y: 5 },
                  { x: 2, y: 6 },
                  { x: 3, y: 5 },
                  { x: 4, y: 8 },
                  { x: 5, y: 7 },
                  { x: 6, y: 10 },
                  { x: 7, y: 12 },
                  { x: 8, y: 14 },
                  { x: 9, y: 14 },
                  { x: 10, y: 13 },
                  { x: 11, y: 16 },
                  { x: 12, y: 15 },
                  { x: 13, y: 16 },
                  { x: 14, y: 16 }
                ]}
              />
              <XAxis
                style={{
                  line: { strokeWidth: 2, stroke: "black" },
                  text: { fontWeight: 700 }
                }}
                title="Days"
              />
              <YAxis
                style={{
                  line: { strokeWidth: 2, stroke: "black" },
                  text: { fontWeight: 700 }
                }}
                title="Attempts-Errors Ratio"
              />
            </XYPlot>
          </div>
        )}
      </div>
    );
  }
}
/* App.propTypes = propTypes;
 */
export default SpeechRecognition(App);
