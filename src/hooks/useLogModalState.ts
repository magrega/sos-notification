import { useState } from "react";

export type ModalType = "change" | "comment" | "complete" | "";

export const useSosModalState = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("");

  const closeModal = () => setOpenModal(false);

  const handleModalStatus = (modalType: ModalType) => {
    setModalType(modalType);
    setOpenModal(true);
  };

  return {
    openModal,
    modalType,
    closeModal,
    handleModalStatus,
  };
};
