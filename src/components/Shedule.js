import { MainNavbar } from "./MainNav";
import Card from './Card';

export const Shedule = () => {
  return (
    <div>
<MainNavbar></MainNavbar>
      <h1>Schedule </h1>
      <div className="card-container">
      <Card
        title="Card 1"
        image="path/to/image1.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        title="Card 2"
        image="path/to/image2.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        title="Card 3"
        image="path/to/image3.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div className="card-container">
      <Card
        title="Card 1"
        image="path/to/image1.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        title="Card 2"
        image="path/to/image2.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        title="Card 3"
        image="path/to/image3.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    </div>
  );
};
