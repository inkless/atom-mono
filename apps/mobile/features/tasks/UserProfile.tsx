import { getUser } from '@/apis/user';
import { UserAvatar } from '@/components/UserAvatar';
import { useQuery } from '@tanstack/react-query';

export function UserProfile() {
  // Queries
  const query = useQuery({ queryKey: ['user'], queryFn: getUser });

  if (!query.data) {
    return null;
  }

  return <UserAvatar name={query.data.name} />;
}
