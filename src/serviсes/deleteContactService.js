import { apiStatuses } from "../consts/apiStatuses";

export function deleteContactService(response) {
  if (response === apiStatuses.success) {
    return true;
  }
}