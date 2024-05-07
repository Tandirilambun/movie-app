import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCredit } from "../services/services.api";

const CreditPage = () => {
  // console.log(window.location.href);
  const { item, itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const fetchCredit = async (type, id) => {
      setIsLoading(true);
      try {
        const res = await getCredit(type, id);
        setCast(res.cast);
        setCrew(res.crew);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }
    fetchCredit(item, itemId);
  },[item, itemId]);
  return (
    <div>
      <h1 className="text-white">{itemId}</h1>
      <h1 className="text-white">{item}</h1>
    </div>
  );
};

export default CreditPage;
