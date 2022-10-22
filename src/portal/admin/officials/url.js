import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const OfficialsListPath = "/portal/admin/officials_management/officials";

export const OfficialsDetails = (id) => urlJoin(OfficialsListPath, id);

export const OfficialsDetailsUrl = (id, params) =>
  OfficialsDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const OfficialsListUrl = (params) => {
  if (params === undefined) {
    return OfficialsListPath;
  } else {
    return urlJoin(OfficialsListPath, "?" + stringifyQs(params));
  }
};
