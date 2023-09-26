import { getPersonById } from "@/dummy-data";
import { useRouter } from "next/router";
import Button from "@/components/ui/button";

function PersonDetailPage(props) {
  const router = useRouter();
  const person = getPersonById(router.query.pId);

  if (!person) {
    return (
      <div>
        <h1>No Person Found!</h1>
        <div>
          <Button link="/person">Back</Button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>{person.firstName} Detail Page </h1>
      <div>
        <Button link="/person">Back to Person List</Button>
      </div>
    </div>
  );
}

export default PersonDetailPage;
