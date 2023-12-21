
import { Others } from "../components/others";
import List from "../components/table/table";

export function Home() {
  return (
    <>
      <div style={{ margin: "50px auto", padding: "50px" }}>
        <List />
      </div>
      <div style={{ margin: "50px auto", padding: "50px" }}>
        <Others />
      </div>
    </>
  );
}
