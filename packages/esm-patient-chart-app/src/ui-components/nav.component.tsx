import React from 'react';
import { ExtensionSlot } from '@openmrs/esm-framework';

const PatientChartNavMenu: React.FC = () => <ExtensionSlot extensionSlotName="patient-chart-dashboard-slot" />;

export default PatientChartNavMenu;
