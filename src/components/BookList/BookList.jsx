import React from 'react';
import { useGlobalContext } from '../../context.';
import { Link } from "react-router-dom"
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading, resultTitle, authors } = useGlobalContext();
  console.log(authors);
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <h2>{resultTitle}</h2>
      <div style={{ alignItems: 'start', gap: '12px' }} className='container flex'>
        <div className='section-title'>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
        <div style={{ width: '40%' }}>
          <h1>Authors</h1>
          {
            authors &&
            authors.docs.map((item) => {
              return <div style={{ width: '100%' }}><Link style={{ width: '100%', display: 'flex' }} to={item.key}>{item.name}</Link></div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList