import { useDashboard } from "../useDashboard";

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
  } = useDashboard();

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
  }
}
