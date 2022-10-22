import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export const UsersListPath = "/portal/admin/users";

export const UsersListPathDetails = (id) => urlJoin(UsersListPath, id);

export const UsersDetailssUrl = (id, params) =>
  UsersListPathDetails(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const UsersListPathUrl = (params) => {
  if (params === undefined) {
    return UsersListPath;
  } else {
    return urlJoin(UsersListPath, "?" + stringifyQs(params));
  }
};
