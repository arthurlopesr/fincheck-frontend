import { Accounts } from "../../components/accounts/Accounts"
import { DashboardContext, DashboardProvider } from "../../components/dashboardContext/DashboardContext"
import { EditAccountModal } from "../../components/dashboardModals/EditAccountModal"
import { NewAccountModal } from "../../components/dashboardModals/NewAccountModal"
import { NewTransactionModal } from "../../components/dashboardModals/NewTransactionModal"
import { Fab } from "../../components/fab/Fab"
import { Header } from "../../components/header/Header"
import { Transactions } from "../../components/transactions/Transactions"

export function Dashboard() {

  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
        {({ accountBeingEdited }) => (
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

            <Fab />
            <NewAccountModal />
            <NewTransactionModal />
            {accountBeingEdited && <EditAccountModal />}
          </div>
        )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  )
}
