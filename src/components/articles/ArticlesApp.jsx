import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../services/ArticleService'
import ArticleList from './ArticleList'


const ArticlesApp = () => {
  const [products,setProducts]=useState(null)
  useEffect(() => {
    listproduits()
  }, [])
  const listproduits=()=>{
    fetchArticles()
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <ArticleList products={products}/>
  )
}

export default ArticlesApp
