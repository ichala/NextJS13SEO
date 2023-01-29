async function getCategory() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
   return res.json()
}

export default async function Head({params: {id}}) {
  const Category = await getCategory()
  const data = Category.categories.find((item) => item.strCategory === id)
  return (
    <>
      <title>{data.strCategory}</title>
<meta name="title" content={data.strCategory} />
<meta name="description" content={data.strCategoryDescription.slice(0,50)+'...'} />
<meta property="og:type" content="website" />
<meta property="og:url" content={`https://next-js-13-seo.vercel.app/item/`+data.strCategory} />
<meta property="og:title" content={data.strCategory} />
<meta property="og:description" content={data.strCategoryDescription.slice(0,50)+'...'}  />
<meta property="og:image" content={data.strCategoryThumb}  />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={`https://next-js-13-seo.vercel.app/item/`+data.strCategory}  />
<meta property="twitter:title" content={data.strCategory} />
<meta property="twitter:description" content={data.strCategoryDescription.slice(0,50)+'...'} />
<meta property="twitter:image" content={data.strCategoryThumb} />
    </>
  )
}
