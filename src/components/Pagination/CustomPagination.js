import  {createTheme,ThemeProvider} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";

function CustomPagination({setPage,numOfPage=10}) {
    const darkTheme = createTheme({
        palette: {
          type: "dark",
        },
      });
      
    const handlePageChange = (page)=>
    {
        setPage(page);
        window.scroll(0,0);
    }
    return ( 
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
        <ThemeProvider theme={darkTheme}>
            <Pagination count= {numOfPage} 
            onChange={(e)=> handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"
            />
        </ThemeProvider>
    </div>);
}

export default CustomPagination;