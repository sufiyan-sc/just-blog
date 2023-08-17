export default async function getUsers() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!data.ok) {
    throw new Error('Failed to fetch');
  }
  return await data.json();
}
