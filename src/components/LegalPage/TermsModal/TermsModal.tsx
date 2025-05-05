import { Box, Modal } from "@mui/material";
import { useAuthQuery } from "hooks/QueryHooks/useAuthQuery";
import { PropsWithChildren, useEffect, useState } from "react";
import TermsTabs from "./TermsTabs";

const TermsModal = ({ children }: PropsWithChildren) => {
  const { useGetUser } = useAuthQuery();
  const { data: userData } = useGetUser();

  const [open, setOpen] = useState(false);
  const handleClose = (
    _: object,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    setOpen(false);
  };

  useEffect(() => {
    if (userData?.isTermsApprovalRequired) setOpen(true);
  }, [userData?.isTermsApprovalRequired]);

  return (
    <>
      {children}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-terms-conditions"
        sx={({ zIndex }) => ({
          color: "white",
          zIndex: zIndex.drawer + 1,
        })}
      >
        <Box>
          <TermsTabs handleClose={() => setOpen(false)} />
        </Box>
      </Modal>
    </>
  );
};

export default TermsModal;
