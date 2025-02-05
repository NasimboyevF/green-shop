import { useEffect } from "react";
import { useMutateProducts } from "../../mutate/mutate";
import Card from "../../components/Card";
import Categoris from "../../components/Categories";
import { useSearchParams } from "react-router";
const Home = () => {
  const { mutation, posts } = useMutateProducts();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    mutation.mutate(searchParams);
  }, []);

  useEffect(() => {
    mutation.mutate(searchParams);
  }, [searchParams]);

  return (
    <div>
      <div className="container py-6 flex justify-between">
        <Categoris
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        <div className="grid grid-cols-3 gap-6 mt-6">
          {posts.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
