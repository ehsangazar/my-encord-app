import { useDispatch } from "react-redux";
import UploadFile from "~/components/UploadFile/UploadFile";
import { addMedia } from "~/reducers/mediaReducer";

const UploadSection = () => {
  const dispatch = useDispatch();

  const handleUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(
          addMedia({
            id: Math.random().toString(36).substr(2, 9),
            filename: file.name,
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
