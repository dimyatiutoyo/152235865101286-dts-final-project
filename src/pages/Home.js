import CategoryPillComponent from "../components/CategoryPillComponent";
import Explore from "../components/Explore";
import RecentRecipes from "../components/RecentRecipes";
import Layout from "./layout/Layout";

function Home() {

  return (
    <Layout>
      <RecentRecipes />
      <CategoryPillComponent />
      <Explore />
    </Layout >
  );
}

export default Home;