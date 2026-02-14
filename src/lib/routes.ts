import { LandingPage } from "@/pages/LandingPage";
import { TasksPage } from "@/pages/TasksPage";
import type { ComponentType } from "react";

export interface AppRoute {
  path: string;
  Component: ComponentType;
  title: string;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    Component: LandingPage,
    title: "Home | My Task App",
  },
  {
    path: "/tasks",
    Component: TasksPage,
    title: "Tasks | My Task App",
  },
];
