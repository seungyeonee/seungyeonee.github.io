import { useParams } from "react-router-dom";

export default function MemberPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>멤버 정보</h1>
      <p>멤버 ID: {id}</p>
    </div>
  );
};
