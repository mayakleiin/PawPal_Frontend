import { usePlaydates } from "../../hooks/usePlaydate";
import PlaydateList from "../../components/PlaydateList";

export default function AllPlaydatesPage() {
  const { playdates, currentPage, totalPages, setCurrentPage, loading } =
    usePlaydates();

  return (
    <div>
      <h2>All Playdates</h2>
      {loading && <p>Loading...</p>}
      <PlaydateList
        playdates={playdates}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
