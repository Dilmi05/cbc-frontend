 import { useState } from "react";
import uploadMediaToSupabase from "../utils/mediaUpload";

export default function FileUploadTest() {
  const [file, setFile] = useState(null);

  async function handleUpload() {
    uploadMediaToSupabase(file).then((url) => {
      console.log(url);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">File Upload Test</h1>
      <input
        type="file"
        className="block w-full max-w-xs text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button
        className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}
