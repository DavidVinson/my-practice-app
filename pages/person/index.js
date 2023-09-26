import Link from "next/link";
import { useRouter } from "next/router";
import { DUMMY_DATA } from "@/dummy-data";
import style from "../person/person.module.css";

function PersonPage(props) {
  const router = useRouter();
  function personDetailHandler(pId) {
    console.log("button is clicked", pId);
    router.push(`/person/${pId}`);
  }
  return (
    <div className={style.person.content}>
      <h1>Person Page</h1>
      <div className={style.list}>
        <ul>
          {DUMMY_DATA.map((p) => (
            <li key={p.id} onClick={() => personDetailHandler(p.id)}>
              {p.firstName} {p.lastName}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.link}>
        <Link href="/">Home Page</Link>
      </div>
    </div>
  );
}

export default PersonPage;
