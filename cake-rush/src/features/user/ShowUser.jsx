import { useSelector } from "react-redux";

function ShowUser() {
  const { userName } = useSelector((store) => store.user);
  if (!userName) return null;
  return (
    <p className="text-lg font-semibold text-slate-50 hidden sm:block">
      {userName}
    </p>
  );
}

export default ShowUser;
