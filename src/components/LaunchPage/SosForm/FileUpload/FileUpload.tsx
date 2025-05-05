import UploadButton from "components/LaunchPage/SosForm/FileUpload/UploadButton";
import UploadedFiles from "components/LaunchPage/SosForm/FileUpload/UploadedFiles";
import { SettersType } from "types/SosTypes";

interface FileUploadProps {
  attachments: File[];
  setFormState: SettersType["setFormState"];
}

const FileUpload = ({ attachments, setFormState }: FileUploadProps) => {
  return (
    <>
      <UploadButton setFormState={setFormState} />
      <UploadedFiles attachments={attachments} setFormState={setFormState} />
    </>
  );
};

export default FileUpload;
