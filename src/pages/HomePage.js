import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni quidem commodi, delectus accusamus voluptates nemo, atque obcaecati facere eaque qui. Quibusdam iusto explicabo eligendi facilis voluptate, voluptatibus vitae vero.",
  },
  {
    id: 2,
    title: "Czym jest teoria względności",
    author: "Jan Nowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni quidem commodi, delectus accusamus voluptates nemo, atque obcaecati facere eaque qui. Quibusdam iusto explicabo eligendi facilis voluptate, voluptatibus vitae vero.",
  },
  {
    id: 3,
    title: "Czym jest gwiazda neutronowa",
    author: "Jan Nowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni quidem commodi, delectus accusamus voluptates nemo, atque obcaecati facere eaque qui. Quibusdam iusto explicabo eligendi facilis voluptate, voluptatibus vitae vero.",
  },
  {
    id: 4,
    title: "Czym jest biały olbrzym",
    author: "Jan Nowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni quidem commodi, delectus accusamus voluptates nemo, atque obcaecati facere eaque qui. Quibusdam iusto explicabo eligendi facilis voluptate, voluptatibus vitae vero.",
  },
];

const HomePage = (props) => {
  const artList = articles.map((article) => <Article key={article.id} {...article} />);
  return <div className="home">{artList}</div>;
};

export default HomePage;
