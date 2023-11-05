import React from 'react';
import SearchForm from './SearchForm';
import searchbar from '../../../src/img/search.png'
const SearchPage = () => {
  return (
    <main className='main_search'>
      <div className='main__wrapper_search'>
        <div className='main__left-box'>
          <h1 className='main_header'>Найдите необходимые данные в пару кликов.</h1>
          <section>Задайте параметры поиска.<br></br> 
              Чем больше заполните, тем точнее поиск
          </section>
          <SearchForm />
        </div>
        <div className='main__right-box'>
          <div className=''>       
            <img src={searchbar} alt='searchbar' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage
