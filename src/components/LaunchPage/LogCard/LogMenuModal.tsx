import { useSosModalState } from "hooks/useLogModalState";
import { ILog } from "types/FetchInterfaces";
import SosModal from "../SosModal/SosModal";
import CardMenuItems from "./CardMenuItems";

interface LogModalProps {
  log: ILog;
  closeMenu: () => void;
}

const LogMenuModal = ({ log, closeMenu }: LogModalProps) => {
  const { openModal, modalType, handleModalStatus, closeModal } =
    useSosModalState();

  return (
    <>
      <SosModal
        open={openModal}
        onClose={closeModal}
        modalType={modalType}
        log={log}
        closeMenu={closeMenu}
      />
      <CardMenuItems handleModalStatus={handleModalStatus} />
    </>
  );
};

export default LogMenuModal;
