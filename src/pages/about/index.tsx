import { useParams } from "react-router";

const About = () => {
    const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default About;
