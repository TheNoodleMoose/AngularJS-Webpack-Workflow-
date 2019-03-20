import angular from "angular";
import "bootstrap/dist/css/bootstrap.css";
import uirouter from "angular-ui-router";

import home from "./home/home.component";
import routing from "./app.config";

export default angular.module("app", [home, uirouter]).config(routing).name;
