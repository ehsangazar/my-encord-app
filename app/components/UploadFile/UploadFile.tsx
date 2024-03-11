import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import Button from "../Button/Button";

interface UploadFileProps {
  handleUpload: (file: File) => Promise<void>;
}

const UploadFile: React.FC = ({ handleUpload }: UploadFileProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUploadLocal = async () => {
    try {
      await handleUpload(file);
    } catch (error) {
      console.error(error);
    }
    setFile(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
      <div className="flex w-full">
        <label
          className="flex items-center justify-center w-full bg-gray-200 text-center text-gray-600 font-bold p-3 rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out max-h-10"
          htmlFor="file"
        >
          <span className="mr-2">
            <AiOutlineUpload />
          </span>
          <span>Upload File</span>
        </label>
        <input
          className="hidden"
          id="file"
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
      {file && (
        <div>
          <div>
            <p>Filename: {file.name}</p>
            <p>Size: {file.size} bytes</p>
          </div>
          <div className="mt-2">
            <Button onClick={handleUploadLocal}>Upload</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
