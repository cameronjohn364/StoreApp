import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const CreateStorePage = () => {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!storeName || !description) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate store creation
    console.log("Store Created:", { storeName, description });
    navigate("/stores"); // Redirect to stores list after creation
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl bg-white shadow-xl rounded-3xl p-8 border border-yellow-400">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Create Your Store
          </h1>

          {error && (
            <div className="mb-4 text-red-500 text-sm font-medium text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleCreate} className="space-y-6">
            <div>
              <label htmlFor="storeName" className="block text-blue-900 font-semibold mb-1">
                Store Name
              </label>
              <input
                id="storeName"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your store name"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-blue-900 font-semibold mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Tell customers about your store"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-xl hover:bg-yellow-300 transition duration-300 shadow"
            >
              🚀 Create Store
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CreateStorePage;