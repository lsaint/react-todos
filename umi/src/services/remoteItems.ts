import requests from '@/utils/requests';

export async function getRemoteItems() {
  return await requests.get('/users', {});
}

export async function getUser() {
  return await requests.get(process.env.API_URL + '/api/user/1');
}
