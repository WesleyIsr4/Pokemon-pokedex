import Link from "next/link";

function About() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre">
          <a>About us</a>
        </Link>
      </li>
    </ul>
  );
}

export default About;
