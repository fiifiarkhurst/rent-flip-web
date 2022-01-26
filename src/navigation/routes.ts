import React from "react";
import { RouteProp } from "./types";
import { DASHBOARD, PROPERTIES, APPLICATIONS, SETTINGS } from "./constants";

const DashboardPage = React.lazy(() => import("../pages/dashboard"));
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const ApplicationPage = React.lazy(() => import("../pages/applications"));
const SettingsPage = React.lazy(() => import("../pages/settings"));

const routes: RouteProp[] = [
  {
    component: DashboardPage,
    name: "Dashboard",
    path: DASHBOARD,
    exact: true,
  },
  {
    component: PropertiesPage,
    name: "Properties",
    path: PROPERTIES,
    exact: true,
  },
  {
    component: ApplicationPage,
    name: "Applications",
    path: APPLICATIONS,
    exact: true,
  },
  {
    component: SettingsPage,
    name: "Settings",
    path: SETTINGS,
    exact: true,
  },
];

export default routes;
