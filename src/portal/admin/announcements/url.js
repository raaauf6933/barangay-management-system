import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const AnnouncementListPath = "/portal/admin/announcements";

export const AnnouncementDetails = (id) => urlJoin(AnnouncementListPath, id);

export const AnnouncementDetailsUrl = (id, params) =>
  AnnouncementDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);
