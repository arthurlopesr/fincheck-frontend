import { useContext } from "react";
import { DashboardContext } from "../view/components/dashboardContext/DashboardContext";

export function useDashboard() {
  return useContext(DashboardContext);
}
