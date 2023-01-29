async function getCategory(id) {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php',  { cache: 'no-store' });
  let result = await res.json();
  let data = result.categories.find((item) => item.strCategory == id);
  return data
}

export default async function Head({params: {id}}) {
  const Category = await getCategory(id)
  return (
    <>
      <title>{Category.strCategory}</title>
<meta name="title" content={Category.strCategory} />
<meta name="description" content={Category.strCategoryDescription.slice(0,50)+'...'} />
<meta property="og:type" content="website" />
<meta property="og:url" content={`https://next-js-13-seo.vercel.app/item/`+Category.strCategory} />
<meta property="og:title" content={Category.strCategory} />
<meta property="og:description" content={Category.strCategoryDescription.slice(0,50)+'...'}  />
<meta property="og:image" content={Category.strCategoryThumb}  />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={`https://next-js-13-seo.vercel.app/item/`+Category.strCategory}  />
<meta property="twitter:title" content={Category.strCategory} />
<meta property="twitter:description" content={Category.strCategoryDescription.slice(0,50)+'...'} />
<meta property="twitter:image" content={Category.strCategoryThumb} />
    </>
  )
}
