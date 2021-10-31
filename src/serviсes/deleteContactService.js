import { API_STATUSES } from "../consts/apiStatuses";

export function deleteContactService(response) {
  return response === API_STATUSES.SUCCESS;
}