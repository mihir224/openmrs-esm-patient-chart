import { defineConfigSchema, getAsyncLifecycle } from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-patient-notes-app";

  const options = {
    featureName: "patient-notes",
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);

  return {
    extensions: [
      {
        id: "notes-widget",
        slot: "patient-chart-summary-dashboard-slot",
        load: getAsyncLifecycle(
          () => import("./notes/notes-overview.component"),
          options
        ),
        meta: {
          columnSpan: 4,
        },
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };