import Swal from "sweetalert2";
import { UpdateRequest } from "../APIRequest/ApiRequest";

export function UpdateTask(id, status) {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: {
      InProgress: "In Progress",
      Completed: "Completed",
      Canceled: "Canceled",
      inputValue: status,
    },
    inputPlaceholder: "Choose a status",
  }).then((result) => {
    if (result.isConfirmed) {
      return UpdateRequest(id, result.value).then((res) => {
        return res;
      });
    }
  });
}
