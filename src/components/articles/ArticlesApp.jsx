import React, { useEffect, useState } from 'react'
import { fetchArticles , deleteArticle } from '../../services/ArticleService'
import ArticleList from './ArticleList'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


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
  const deleteProduct = (productId,des) => {
    confirmAlert({
    title: "Confirm delete...",
    message: " supprimer l' article: " + des,
    buttons: [
    {
    label: 'Oui',
    onClick: () => deleteArticle(productId)
    .then(res=>
    setProducts(products.filter((product) => product._id !== productId)))
    //.then(console.log("suppression effectuée avec success"))
    .catch(error=>console.log(error))
    },
    {
    label: 'Non',
    }
    ]
    });
    }
  return (
    <ArticleList products={products} deleteProduct={deleteProduct}/>
  )
}

export default ArticlesApp
