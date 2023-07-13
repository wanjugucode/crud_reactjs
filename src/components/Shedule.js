import Card from "./Card";
import { MainNavbar } from "./MainNav";
import img1 from "./imager1.jpg"
import img2 from "./imager2.jpg"
import img3 from "./imager3.jpg"
import img4 from "./imager4.jpg"
import img5 from "./imager5.jpg"
import img6 from "./imager6.jpg"


export const Shedule = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <h1>Schedule </h1>
      <div className="card-container">
        <Card
          title="Card 1"
          image={img1}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 2"
          image={img2}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 3"
          image={img3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className="card-container">
        <Card
          title="Card 1"
          image={img4}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 2"
          image={img5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 3"
          image={img6}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};
