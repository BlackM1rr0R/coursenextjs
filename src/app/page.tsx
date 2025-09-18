
import Category from "./component/category/category";
import Hero from "./component/hero/hero";
import Learning from "./component/learning/learning";
import TopVisum from "./component/topvisum/topvisum";

export default function Home() {
  return (
    <div>
      <Category/>
      <Hero/>
      <Learning/>
      <TopVisum/>
    </div>
  );
}
