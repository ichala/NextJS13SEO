import Image from "next/image";

async function getData(id) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`, { cache: 'no-store' }
    );
    return res.json();
  }

const page = async ({
    params,
  }) => {
    const data = await getData(params.id);
  return (
    <>
    <div className="text-4xl flex justify-center items-center flex-wrap gap-2 text-red-800">
    {data.meals.map((item) => (

<div key={item.idMeal}  className="card max-w-sm bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<Image src={item.strMealThumb} alt="Picture of the author" width={500} height={500} />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{item.strMeal }</h2>
</div>
</div>
    ))}
  </div>
  </>
  )
}

export default page
