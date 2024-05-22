import { useParams } from "react-router-dom";
import CollectionDetail from "../layouts/CollectionDetail";
import CollectionMovie from "../layouts/CollectionMovie";
import { useEffect, useState } from "react";
import { getMovieCollection } from "../services/services.api";
import NavigationBar from "../components/Navbar";
const CollectionPage = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCollection = async (id) => {
      setIsLoading(true);
      try {
        const response = await getMovieCollection(id);
        setCollection(response);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCollection(collectionId);
  }, [collectionId]);
  console.log(collection);
  return !isLoading ? (
    <>
      <NavigationBar />
      <CollectionDetail collection={collection}></CollectionDetail>
      <CollectionMovie collection_movie={collection.parts}></CollectionMovie>
    </>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default CollectionPage;
