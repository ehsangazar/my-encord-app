import { useDispatch } from "react-redux";
import UploadFile from "~/components/UploadFile/UploadFile";
import { addMedia } from "~/reducers/mediaReducer";

type handleUpload = (file: File) => Promise<string>;

const UploadSection = () => {
  const dispatch = useDispatch();

  const handleUpload: handleUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(
          addMedia({
            filename: file.name,
            url: URL.createObjectURL(file),
            size: file.size,
            createdAt: new Date().toISOString(),
          })
        );
        resolve("File Uploaded Successfully!");
      }, 2000);
    });
  };

  return (
    <div>
      <UploadFile handleUpload={handleUpload} />
    </div>
  );
};

export default UploadSection;
