import { useAuth } from "../../../hooks/useAuth"
import { Button } from "../../components/button/Button";

export function Dashboard() {
  const { signout } = useAuth();

  return (
    <div>
      <h1>
        Dashboard page
      </h1>

      <Button onClick={signout}>
        Sign out
      </Button>
    </div>
  )
}
