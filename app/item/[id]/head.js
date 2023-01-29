async function getCategory() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php',  { cache: 'no-store' });
   return res.json()
}

export default async function Head({params: {id}}) {
  const Category = await getCategory()
  return (
    <>
      <title>{Category.categories.find((item) => item.strCategory == id).strCategory}</title>
<meta name="title" content={Category.categories.find((item) => item.strCategory == id).strCategory} />
<meta name="description" content={Category.categories.find((item) => item.strCategory == id).strCategoryDescription.slice(0,50)+'...'} />
<meta property="og:type" content="website" />
<meta property="og:url" content={`https://next-js-13-seo.vercel.app/item/`+Category.categories.find((item) => item.strCategory == id).strCategory} />
<meta property="og:title" content={Category.categories.find((item) => item.strCategory == id).strCategory} />
<meta property="og:description" content={Category.categories.find((item) => item.strCategory == id).strCategoryDescription.slice(0,50)+'...'}  />
<meta property="og:image" content={Category.categories.find((item) => item.strCategory == id).strCategoryThumb}  />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={`https://next-js-13-seo.vercel.app/item/`+Category.categories.find((item) => item.strCategory == id).strCategory}  />
<meta property="twitter:title" content={Category.categories.find((item) => item.strCategory == id).strCategory} />
<meta property="twitter:description" content={Category.categories.find((item) => item.strCategory == id).strCategoryDescription.slice(0,50)+'...'} />
<meta property="twitter:image" content={Category.categories.find((item) => item.strCategory == id).strCategoryThumb} />
    </>
  )
}
