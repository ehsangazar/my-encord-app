import { useRef, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

interface UploadFileProps {
  handleUpload: (file: File) => Promise<void>;
}

const UploadFile: React.FC = ({ handleUpload }: UploadFileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUploadLocal = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      await handleUpload(file);
      setSuccess("File Uploaded Successfully!");
    } catch (error) {
      setError("File Upload Failed! Please try again.");
    }
    // reset file input value
    inputRef.current.value = "";
    setLoading(false);
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
          ref={inputRef}
          className="hidden"
          id="file"
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
      {file && (
        <div>
          <div>
            <p>Filename: {file.name}</p>
            <p>Size: {file.size} bytes</p>
          </div>
          {!loading && (
            <div className="mt-2">
              <Button onClick={handleUploadLocal}>Upload</Button>
            </div>
          )}
          {/* loading spinner */}
          {loading && <Spinner />}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
