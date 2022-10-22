import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const PositionsListPath = "/portal/admin/officials_management/positions";

export const PositionDetails = (id) => urlJoin(PositionsListPath, id);

export const PositionDetailsUrl = (id, params) =>
  PositionDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const PositionsListUrl = (params) => {
  if (params === undefined) {
    return PositionsListPath;
  } else {
    return urlJoin(PositionsListPath, "?" + stringifyQs(params));
  }
};
