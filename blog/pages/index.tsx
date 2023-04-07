import Link from "next/link";

export default function Blog() {
  const origin = "http://localhost:3000";

  const fullURL = `${origin}/about`;
  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
      <Link href="/">Home Do not work</Link>
      <br />
      <Link href="/about">About page - do not work</Link>
      <br />
      <Link href="../about">About page - do not work</Link>
      <br />
      <Link href={fullURL}>About page - do not work</Link>
      <br />
    </div>
  );
}
