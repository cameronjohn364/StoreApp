import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Stores = () => {
  const navigate = useNavigate();

  const dummyStores = [
    {
      id: 1,
      name: "Gadget Haven",
      description: "Electronics, gadgets, and accessories you’ll love.",
    },
    {
      id: 2,
      name: "Trendy Threads",
      description: "Fashion-forward clothing for all seasons.",
    },
    {
      id: 3,
      name: "Home Essentials",
      description: "Everything you need to make your house a home.",
    },
    {
      id: 4,
      name: "Book Bazaar",
      description: "Handpicked books and literary treasures.",
    },
    {
      id: 5,
      name: "Beauty Bliss",
      description: "Skincare, cosmetics, and wellness products.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-12 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8">Browse All Stores</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {dummyStores.map((store) => (
            <div
              key={store.id}
              className="bg-white border-2 border-yellow-400 rounded-2xl shadow-md p-6 transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{store.name}</h2>
              <p className="text-gray-600 mb-4">{store.description}</p>
              <button
                onClick={() => navigate(`/store/${store.id}`)}
                className="text-blue-900 font-medium hover:underline"
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