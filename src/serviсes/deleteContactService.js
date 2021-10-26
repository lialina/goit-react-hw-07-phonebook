import { apiStatuses } from "../consts/apiStatuses";

export function deleteContactService(response) {
  return response === apiStatuses.success;
}