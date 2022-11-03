import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const BlotterListPath = "/portal/admin/blotter";

export const BlotterListPathDetails = (id) => urlJoin(BlotterListPath, id);

export const BlotterDetailssUrl = (id, params) =>
  BlotterListPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const BlotterListPathUrl = (params) => {
  if (params === undefined) {
    return BlotterListPath;
  } else {
    return urlJoin(BlotterListPath, "?" + stringifyQs(params));
  }
};

export const BlotterEditPath = "/portal/admin/blotter/edit";

export const BlotterEditPathDetails = (id) => urlJoin(BlotterEditPath, id);

export const BlotterEditDetailssUrl = (id, params) =>
  BlotterEditPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
