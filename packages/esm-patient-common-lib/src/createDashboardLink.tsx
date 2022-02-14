import React, { useMemo } from 'react';
import { ConfigurableLink, usePatient } from '@openmrs/esm-framework';
import { DashboardLinkConfig } from './types';
import { spaBasePath } from './constants';

export const createDashboardLink = (db: DashboardLinkConfig) => {
  const DashboardLink: React.FC = () => {
    const { patientUuid } = usePatient();
    const basePath = useMemo(() => spaBasePath.replace(':patientUuid', patientUuid), [patientUuid]);
    return (
      <div key={db.name}>
        <ConfigurableLink to={`${basePath}/${db.name}`} className="bx--side-nav__link">
          {db.title}
        </ConfigurableLink>
      </div>
    );
  };
  return DashboardLink;
};
