import requests from '@/utils/requests';

export async function getRemoteItems() {
  const path = '/users';
  return await requests.get(path, {});
}
