import ProjectCard from "./projectcard";

export default function Project() {
  return (
    <div className="mt-36">
      <h1 className="text-4xl font-bold text-center text-white font-serif ">
        {" "}
        My Project Work
      </h1>
      <div className="my-4 flex flex-col lg:flex-row lg:justify-evenly justify-center items-center">
        <ProjectCard
          photo="./heart_ss.jpg"
          title="Heart Disease Prediction"
          desc="An AI-powered heart disease prediction web application that leverages machine learning algorithms to assess a user's risk based on clinical parameters. The model is trained on a publicly available dataset sourced from Kaggle, ensuring both accuracy and transparency"
          link="https://github.com/VengurlekarMayuresh/Heart-Disease-Predictor"
        />

        <ProjectCard
          photo="./Airbnb.png"
          title="AIRBNB CLONE"
          desc="A full-stack Airbnb clone that lets users browse, book, and list rental properties. It features user authentication, interactive maps, booking management, and a modern, responsive UI — delivering a real-world rental experience."

          link="https://github.com/VengurlekarMayuresh/WanderLust"
        />
      </div>
    </div>
  );
}

// ./heart_ss.jpg
