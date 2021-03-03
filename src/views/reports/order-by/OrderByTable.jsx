import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import api from "../../../api";

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        fontFamily: "'Poppins', sans-serif",
      },
      body: {
        color: "#6A707E",
      },
    },
    MuiTypography: {
      h6: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "400",
      },
    },
    MuiButton: {
      root: {
        fontFamily: "'Poppins', sans-serif",
        color: "#6A707E",
      },
    },
    MuiTableRow: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "rgba(0, 97, 126, 0.08) !important",
        },
      },
    },
  },
});

const OrderByTable = (props) => {
  let [headings, setDataHeadings] = useState([]);
  let [column, setDataColumns] = useState([]);
  let [rows, setDataRows] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      if(props.groupBy === ""){
        return;
      }
      const [res, fetchedData] = await api.report.get.employeeGroupBy({
        heading: props.groupBy,
      });
      if (res.status !== 200) {
        toast.error(res.message);
        return;
      }

      let data = [];
      let headingTemp = [];

      fetchedData.data.map((record) => {
        headingTemp.push(record.heading);
        let empData = record.records;
        data.push(empData);
      });

      if (fetchedData.data.length === 0) {
        toast.error("No data fetched!");
        return;
      }
      setDataRows(data);
      setDataColumns(fetchedData.data[0].columns);
      setDataHeadings(headingTemp);
    }
    getEmployees();
  }, [props.groupBy]);

  return (
    <MuiThemeProvider theme={theme}>
      {headings.map((value, index) => (
        <Box style={{marginTop: "1rem"}}>
          <MUIDataTable
              key = {index}
            title={headings[index]}
            data={rows[index]}
            columns={column}
            options={{
              download: true,
              filter: false,
              print: true,
              viewColumns: false,
              selectableRows: false,
            }}
          />
        </Box>
      ))}
    </MuiThemeProvider>
  );
};

export default OrderByTable;
