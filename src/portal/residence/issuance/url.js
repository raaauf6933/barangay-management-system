import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const certificateSectionUrl = "/portal/residence/issuance";

export const certificateListPath = certificateSectionUrl;

export const CreatePath_Choose =
  certificateSectionUrl + "/create" + "/choose_certificate";

export const CreatePath_Form = certificateSectionUrl + "/create" + "/form";

export const IssuanceDetailsPath = "/portal/residence/issuance";

export const IssuanceDetails = (id) => urlJoin(IssuanceDetailsPath, id);

export const IssuanceDetailssUrl = (id, params) =>
  IssuanceDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
