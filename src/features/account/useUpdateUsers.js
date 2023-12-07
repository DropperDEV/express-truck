import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiUsers";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user   }) => {
      console.log("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
  });

  return { updateUser, isUpdating };
}
