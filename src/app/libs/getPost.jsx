export default async function getUser(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!data.ok) {
    throw new Error('Failed');
  }
  return await data.json();
}
