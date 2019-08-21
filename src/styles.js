export const styles = {
  app: {
    container: {
      overflow: "auto",
      width: "100%",
      height: "100%",
      backgroundColor: "#F4F4F4",
      boxShadow: "0 1px 10px rgba(0,0,0,0.12), 0 1px 20px rgba(0,0,0,0.24)"
    },
    book: {
      height: "80%",
      backgroundColor: "#C8C8C6",
      marginHorizontal: "50",
      padding: 30,
      borderBottom: "10px solid white"
    },
    articles: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      paddingLeft: 10
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
