// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

import { config } from "config";

export const environment = {
  production: false,
  //apiURL: "http://localhost:8000/api",
  //apiURL: "http://181.209.23.177:8017/api",
  apiURL: "http://192.168.24.197:8017/api",
};
