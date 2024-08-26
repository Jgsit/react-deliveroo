import Meal from "./Meal";

function Section(props) {
  const data = props.data;
  return (
    <section className={data.name}>
      <h2>{data.name}</h2>
      <div className="meals">
        {data.meals.map((meal) => {
          return <Meal key={meal.id} data={meal} />;
        })}
      </div>
    </section>
  );
}
export default Section;
