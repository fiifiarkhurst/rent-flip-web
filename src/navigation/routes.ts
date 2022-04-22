import React from "react";
import { RouteProp } from "./types";
import {
  DASHBOARD,
  PROPERTIES,
  APPLICATIONS,
  SETTINGS,
  ADD_PROPERTY,
  APPLICATION_DETAILS,
  PROPERTY_DETAILS,
} from "./constants";

const DashboardPage = React.lazy(() => import("../pages/dashboard"));
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const AddPropertyPage = React.lazy(() => import("../pages/properties-add"));
const PropertieDetailsPage = React.lazy(
  () => import("../pages/properties-details")
);
const ApplicationPage = React.lazy(() => import("../pages/applications"));
const ApplicationDetailsPage = React.lazy(
  () => import("../pages/applications-details")
);
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
    component: AddPropertyPage,
    name: "Add Property",
    path: ADD_PROPERTY,
    exact: true,
  },
  {
    component: PropertieDetailsPage,
    name: "Property Details",
    path: PROPERTY_DETAILS,
    exact: true,
  },
  {
    component: ApplicationPage,
    name: "Applications",
    path: APPLICATIONS,
    exact: true,
  },
  {
    component: ApplicationDetailsPage,
    name: "Application Details",
    path: APPLICATION_DETAILS,
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
