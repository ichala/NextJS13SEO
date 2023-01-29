import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="text-4xl flex justify-center items-center flex-wrap gap-2 text-red-800">
      {data.categories.map((item) => (

<div  key={item.idCategory}  className="card max-w-sm bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
  <Image src={item.strCategoryThumb} alt="Picture of the author" width={500} height={500} />
</figure>
<div className="card-body items-center text-center">
  <h2 className="card-title">{item.strCategory }</h2>
  <p className="text-sm">{item.strCategoryDescription.length > 100 ? item.strCategoryDescription.substring(0, 100) + "..." : item.strCategoryDescription
}</p>

  <div className="card-actions">
    <Link href={`/item/${item.strCategory}`}>
    <button className="btn btn-primary">CHECK</button>
    </Link>
  </div>
</div>
</div>


      ))}
    </div>
  );
}
