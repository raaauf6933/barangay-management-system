import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const ResidentsListPath = "/portal/admin/resident_management";

export const ResidentsListPathDetails = (id) => urlJoin(ResidentsListPath, id);

export const ResidentDetailsUrl = (id, params) =>
  ResidentsListPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const ResidentsListPathUrl = (params) => {
  if (params === undefined) {
    return ResidentsListPath;
  } else {
    return urlJoin(ResidentsListPath, "?" + stringifyQs(params));
  }
};
