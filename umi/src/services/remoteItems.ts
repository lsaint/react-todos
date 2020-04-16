import requests from '@/utils/requests';

export async function getRemoteItems() {
  const path = '/users';
  return await requests.get(path, {});
}

export async function getUser() {
  return await requests.get(process.env.API_URL + '/api/user/1');
}
