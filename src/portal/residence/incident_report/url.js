import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const IncidentReportListPath = "/portal/residence/incident_report";

export const IncidentListPathDetails = (id) =>
  urlJoin(IncidentReportListPath, id);

export const IncidentDetailssUrl = (id, params) =>
  IncidentListPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const IncidentListPathUrl = (params) => {
  if (params === undefined) {
    return IncidentReportListPath;
  } else {
    return urlJoin(IncidentReportListPath, "?" + stringifyQs(params));
  }
};

export const IncidentEditPath = "/portal/residence/incident_report/edit";

export const IncidentEditPathDetails = (id) => urlJoin(IncidentEditPath, id);

export const IncidentEditDetailssUrl = (id, params) =>
  IncidentEditPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
