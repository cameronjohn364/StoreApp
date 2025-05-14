import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useAuth } from "../Tags/AuthProvider"; // Adjust the path if needed

const Stores = () => {
  const navigate = useNavigate();
  const { Logged, user } = useAuth();

  const dummyStores = [
    { id: 1, name: "Gadget Haven", description: "Electronics, gadgets, and accessories you’ll love." },
    { id: 2, name: "Trendy Threads", description: "Fashion-forward clothing for all seasons." },
    { id: 3, name: "Home Essentials", description: "Everything you need to make your house a home." },
    { id: 4, name: "Book Bazaar", description: "Handpicked books and literary treasures." },
    { id: 5, name: "Beauty Bliss", description: "Skincare, cosmetics, and wellness products." },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-50 py-12 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-sm">
          Browse All Stores
        </h1>
        <p className="text-gray-700 mb-10 text-center max-w-xl">
          Explore our vibrant marketplace of unique sellers and find exactly what you're looking for!
        </p>

        {/* Create Store Button */}
        {Logged && user?.role === "seller" && (
          <button
            onClick={() => navigate("/create-store")}
            className="mb-12 bg-yellow-400 text-blue-900 text-lg font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition"
          >
            + Create Your Store
          </button>
        )}

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {dummyStores.map((store) => (
            <div
              key={store.id}
              className="bg-white border-2 border-yellow-400 rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{store.name}</h2>
              <p className="text-gray-600 mb-4">{store.description}</p>
              <button
                onClick={() => navigate(`/store/${store.id}`)}
                className="text-blue-900 font-semibold hover:underline"
              >
                Visit Store →
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Stores;