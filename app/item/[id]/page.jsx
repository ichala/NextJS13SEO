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
    <div className="flex p-4 justify-center items-center">
    <div className="alert alert-warning shadow-lg font-bold ">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>try pasting this link https://next-js-13-seo.vercel.app/{params.id} at <a href="https://metatags.io/">https://metatags.io/</a> to see the SEO/METATAGS result</span>
  </div>
</div>
</div>
    <div className="text-4xl flex justify-center items-center flex-wrap gap-2 text-primary">
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
