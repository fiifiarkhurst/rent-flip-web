import { NavigationProp } from "../../navigation/types";
import {
  ChartPieIcon,
  CogIcon,
  OfficeBuildingIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import {
  APPLICATIONS,
  DASHBOARD,
  PROPERTIES,
  SETTINGS,
} from "../../navigation/constants";

export const navigation: Array<NavigationProp> = [
  {
    name: "Dashboard",
    icon: ChartPieIcon,
    href: [DASHBOARD],
  },
  {
    name: "Properties",
    icon: OfficeBuildingIcon,
    href: [PROPERTIES],
  },
  {
    name: "Applications",
    icon: DocumentTextIcon,
    href: [APPLICATIONS],
  },
  {
    name: "Settings",
    icon: CogIcon,
    href: [SETTINGS],
  },
];
