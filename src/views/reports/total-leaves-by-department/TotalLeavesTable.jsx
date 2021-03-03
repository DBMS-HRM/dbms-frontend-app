import React, { useState, useEffect } from "react";
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

const TotalLeaveTable = (props) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getLeaveTable() {
      const [res, fetchedData] = await api.report.get.leaveReport({
        fromDate: props.fromDate,
        toDate: props.toDate,
      });
      if (res.status !== 200) {
        toast.error(res.message);
        return;
      }

      let dataRows = [];

      fetchedData.data.map((row) => {
        let dataRow = [];

        dataRow.push(row.departmentName);
        dataRow.push(row.anual);
        dataRow.push(row.casual);
        dataRow.push(row.maternity);
        dataRow.push(row.noPay);

        dataRows.push(dataRow);
      });

      setData(dataRows);
    }

    getLeaveTable();
  }, []);

  let columns = ["Department Name", "Annual", "Casual", "Maternity", "No Pay"];

  return (
    <MuiThemeProvider>
      <MUIDataTable
        title={"Total Leaves by Department"}
        data={data}
        columns={columns}
        options={{
          download: false,
          filter: false,
          print: false,
          viewColumns: false,
          selectableRows: false,
        }}
      />
    </MuiThemeProvider>
  );
};

export default TotalLeaveTable;
