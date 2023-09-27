import { useRouter } from "next/router";
import { DUMMY_DATA } from "@/dummy-data";
import style from "../person/person.module.css";
import Button from "../../components/ui/button";

function PersonPage(props) {
  const router = useRouter();
  function personDetailHandler(personId) {
    router.push(`/person/${personId}`);
  }
  return (
    <div className={style.person.content}>
      <h1>Person Page</h1>
      <div>
        <ul>
          {DUMMY_DATA.map((p) => (
            <Button key={p.id} click={() => personDetailHandler(p.id)}>
              {p.firstName} {p.lastName}
            </Button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonPage;
