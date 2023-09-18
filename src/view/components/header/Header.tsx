import { Logo } from "../logo/Logo";
import { UserMenu } from "../userMenu/UserMenu";

export function Header() {
  return (
    <header className="h-12 flex items-center justify-between ">
      <Logo className="h-6 text-teal-800" />

      <UserMenu />
    </header>
  );
}
