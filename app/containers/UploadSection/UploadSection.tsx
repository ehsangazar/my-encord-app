import { useDispatch } from "react-redux";
import UploadFile from "~/components/UploadFile/UploadFile";
import { addMedia } from "~/reducers/mediaReducer";

type handleUpload = (file: File) => Promise<string>;

const UploadSection = () => {
  const dispatch = useDispatch();

  const handleUpload: handleUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          dispatch(
            addMedia({
              filename: file.name,
              url: URL.createObjectURL(file),
              size: file.size,
              width: image.naturalWidth,
              height: image.naturalHeight,
              createdAt: new Date().toISOString(),
            })
          );
          resolve("File Uploaded Successfully!");
        };
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
