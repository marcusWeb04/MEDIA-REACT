import { useParams } from "react-router-dom";

export default function ProfilPage() {
  // déclaration |state
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <>
      <h1>Profile Page {profileId}</h1>
    </>
  );
}
