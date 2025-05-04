import { useSosModalState } from "hooks/useLogModalState";
import { ILog } from "types/FetchInterfaces";
import SosModal from "../SosModal/SosModal";
import LogButtons from "./LogButtons";

interface LogModalProps {
  log: ILog;
  closeSwipeMenu: () => void;
}

const LogModal = ({ log, closeSwipeMenu }: LogModalProps) => {
  const { openModal, modalType, handleModalStatus, closeModal } =
    useSosModalState();

  return (
    <>
      <SosModal
        open={openModal}
        onClose={closeModal}
        modalType={modalType}
        log={log}
        closeMenu={closeSwipeMenu}
      />
      <LogButtons handleModalStatus={handleModalStatus} />
    </>
  );
};

export default LogModal;
