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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Text from "./Components/Text";
import { styles } from "./styles";

import book from "./assets/book.png";
import page1 from "./assets/page1.png";
import page2 from "./assets/page2.png";
import page3 from "./assets/page3.png";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  RadialChart
} from "react-vis";
import { Typography } from "@material-ui/core";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  nextPage = reset => {
    reset();
    this.flipPage.gotoNextPage();
  };
  prevPage = reset => {
    reset();
    this.flipPage.gotoPreviousPage();
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
        <Typography
          style={{
            fontFamily: "ZCOOL XiaoWei, serif",
            textAlign: "center",
            color: "#003D9A",
            fontWeight: "700",
            margin: 2
          }}
          component="h3"
          variant="h2"
          gutterBottom
        >
          SPEAK
          <img src={book} alt="" width="55px" />
          READ
        </Typography>
        <AppBar position="static" style={{ backgroundColor: "#009968" }}>
          <Tabs value={this.state.value} onChange={this.tabChange}>
            <Tab label="Storybook" />
            <Tab label="Analytics" />
          </Tabs>
        </AppBar>

        {this.state.value === 0 && (
          <div>
            <FlipPage
              style={styles.app.book}
              ref={c => {
                this.flipPage = c;
              }}
              flipOnTouch={true}
              orientation="horizontal"
              animationDuration={400}
              height={winH}
              width={winW}
              pageBackground="#009968"
              onPageChange={() => this.nextPage(resetTranscript)}
            >
              <article style={styles.app.articles}>
                <h1>Page 1</h1>
                <Paper elevation={3}>
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    text="The dog chased the cat around the house."
                  />
                </Paper>
                <img src={page1} alt="" />
              </article>
              <article style={styles.app.articles}>
                <h1>Page 2</h1>
                <Paper elevation={3}>
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    text="The cat ran up the tree to get away from the dog."
                  />
                </Paper>
                <img src={page2} alt="" />
              </article>
              <article style={styles.app.articles}>
                <h1>Page 3</h1>
                <Paper elevation={3}>
                  <Text
                    reset={resetTranscript}
                    transcript={transcript}
                    text="This let the mouse run away."
                  />
                </Paper>
                <img src={page3} alt="" />
              </article>
            </FlipPage>

            {/* <button onClick={resetTranscript}>Try Again</button> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <button
                style={styles.app.pageBtns}
                onClick={() => this.prevPage(resetTranscript)}
              >
                <Icon>arrow_back</Icon>
              </button>
              <button
                style={styles.app.pageBtns}
                onClick={() => this.nextPage(resetTranscript)}
              >
                <Icon>arrow_forward</Icon>
              </button>
            </div>
          </div>
        )}
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
