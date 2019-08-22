import openBook from "./assets/openbook.png";
import gradient from "./assets/gradient.png";
export const styles = {
  app: {
    container: {
      overflow: "auto",
      width: "100%",
      height: "100%",
      backgroundColor: "#8CBEBC",
      boxShadow: "0 1px 10px rgba(0,0,0,0.12), 0 1px 20px rgba(0,0,0,0.24)"
    },
    book: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 30,
      marginBottom: 30
    },
    articles: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      background: "url(" + openBook + ")",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#8CBEBC"
    },
    pageBtns: {
      minWidth: 100,
      margin: 10,
      padding: 5
    },
    bookBar: {
      maxWidth: 400,
      flexGrow: 1,
      color: "blue",
      backgroundColor: "#F4F4F4"
    }
  },
  book: {}
};
