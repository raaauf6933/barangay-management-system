import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const IssuanceMngtListPath = "/portal/admin/issuance_management";

export const IssuanceMngtDetails = (id) => urlJoin(IssuanceMngtListPath, id);

export const IssuanceMngtDetailsUrl = (id, params) =>
  IssuanceMngtDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
