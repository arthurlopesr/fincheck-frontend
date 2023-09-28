import { Accounts } from "../../components/accounts/Accounts"
import { DashboardProvider } from "../../components/dashboardContext/DashboardContext"
import { Header } from "../../components/header/Header"
import { Transactions } from "../../components/transactions/Transactions"

export function Dashboard() {

  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <Header />

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="h-full md:w-1/2">
            <Accounts />
          </div>

          <div className="h-full md:w-1/2 ">
            <Transactions />
          </div>
        </main>
      </div>
    </DashboardProvider>
  )
}
