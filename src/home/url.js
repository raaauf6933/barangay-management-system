import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const AnnouncementDetails_Section = "/announcement";

export const AnnouncementDetails = (id) =>
  urlJoin(AnnouncementDetails_Section, id);

export const AnnouncementDetailsUrl = (id, params) =>
  AnnouncementDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
