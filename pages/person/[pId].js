import { getPersonById } from "@/dummy-data";
import { useRouter } from "next/router";
import Link from "next/link";

function PersonDetailPage(props) {
  const router = useRouter();
  const person = getPersonById(router.query.pId);

  if (!person) {
    return (
      <div>
        <h1>No Person Found!</h1>
        <div>
          <Link href="/person">Back</Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>{person.firstName} Detail Page </h1>
      <div>
        <Link href="/person">Back to Person List</Link>
      </div>
    </div>
  );
}

export default PersonDetailPage;
