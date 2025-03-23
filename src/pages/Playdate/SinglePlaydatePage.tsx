import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaydates } from "../../hooks/usePlaydate";
import PlaydateDetails from "../../components/PlaydateDetails";

export default function SinglePlaydatePage() {
  const { id } = useParams<{ id: string }>();
  const { singlePlaydate, fetchSinglePlaydate, loading } = usePlaydates();

  useEffect(() => {
    if (id) fetchSinglePlaydate(id);
  }, [id, fetchSinglePlaydate]);

  if (loading || !singlePlaydate) return <p>Loading...</p>;

  return <PlaydateDetails playdate={singlePlaydate} />;
}
