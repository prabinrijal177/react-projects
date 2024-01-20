
import Card from "./Card";

export const recipes = [
    {
        id:1,
        name:"Thakali",
        image: "https://m.recipes.timesofindia.com/photo/82048030.cms",
        tag: "Nepalese Dish",
        numberOfMinutes: 30,
     },
     {
        id:2,
        name:"MOMO",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
        tag: "Most Try",
        numberOfMinutes: 10,
     },
{
    id:3,
    name:"Khaja Set",
    image: "https://media.istockphoto.com/id/692690964/photo/nepali-newari-khaja-set.jpg?s=170667a&w=0&k=20&c=NlnTfJF09Xtj0mTBbBYC-8sAjfee1xNIXM21b3Ler0I=",
    tag: "Newari Food",
    numberOfMinutes: 20,
 },
 {
    id:4,
    name:"Yomari",
    image: "https://imagepasal.com/cache/232f319bbbb068827bb0d1dd6a6f25ed-v11.jpg",
    tag: "Sweet",
    numberOfMinutes: 7,
 },
];

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}









