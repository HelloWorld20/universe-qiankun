export default function fetcher(path: string) {
  return fetch(`http://localhost:4000${path}`).then((res) => res.json());
}
