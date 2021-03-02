import axios from "axios";
import { extractBodyResolve } from "../client";

export default {
  get: {
    async employeeGroupBy(query) {
      return extractBodyResolve(
        axios.get(`api/report/get-employees`, { params: query })
      );
    },
    async leaveReport(query) {
      return extractBodyResolve(
        axios.get(`api/report/get-leaves`, { params: query })
      );
    },
  },
};
