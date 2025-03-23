import { usePlaydates } from "../../hooks/usePlaydate";
import CreatePlaydateForm from "../../components/CreatePlaydateForm";

export default function CreatePlaydatePage() {
  const { handleCreatePlaydate } = usePlaydates();

  return (
    <div>
      <h2>Create Playdate</h2>
      <CreatePlaydateForm onCreate={handleCreatePlaydate} />
    </div>
  );
}
