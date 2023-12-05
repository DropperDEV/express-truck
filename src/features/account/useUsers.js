import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  return [isLoading, users, error]
}
