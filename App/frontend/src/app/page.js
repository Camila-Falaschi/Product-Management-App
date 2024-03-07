'use client'

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import { requestGet } from "./services/request";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [ordering, setOrdering] = useState('None');
  const [isFetching, setIsFetching] = useState(true);
  
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        sessionStorage.getItem('email')
        const { data } = await requestGet('/product');
        setProducts(data);
        setOriginalList(data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        sessionStorage.clear();
        router.push('/login');
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search == '') {
      setProducts(originalList);
    } else if (search != '') {
      const filterProducts = (search) => {
        return originalList.filter((product) => product.nome.toLowerCase().includes(search.toLowerCase()));
      }
      setProducts(filterProducts(search));
    }
  }, [search]);

  useEffect(() => {
      const ordenarPorChave = (array, chave, ordem) => {
        return array.slice().sort((a, b) => {
          if (ordem === 'asc') {
            if (a[chave] < b[chave]) return -1;
            if (a[chave] > b[chave]) return 1;
            return 0;
          } else if (ordem === 'desc') {
            if (a[chave] > b[chave]) return -1;
            if (a[chave] < b[chave]) return 1;
            return 0;
          };
        });
      };
      setProducts(ordenarPorChave(products, filter, ordering));
  }, [filter, ordering]);

  const validateAuthentication = async () => {
    try {
      sessionStorage.getItem('token')
      return true;
    } catch (error) {
      toast.error(
        "Você não possui permissão para realizar essa operação."
      );
      toast.error(
        "Por favor, realize o Login na sua conta."
      );
      return false;
    }
  };

  const handleClickCard = (product) => {
    if (validateAuthentication()) {
      router.push({
        pathname: 'product/details',
        query: queryString.stringify(product),
      });
    } else {
      router.push('auth/login');
    }
  };

  const optionsKeys = [
    { value: 'all', label: 'All' },
    { value: 'name', label: 'Name' },
    { value: 'brand', label: 'Brand' },
    { value: 'model', label: 'Model' },
    { value: 'price', label: 'Price' },
    { value: 'color', label: 'Color' }
  ];

  const optionsOrder = [
    { value: 'none', label: 'None' },
    { value: 'asc', label: 'Asc' },
    { value: 'desc', label: 'Desc' }
  ];

  const handleCleanFilter = () => {
    setSearch('');
    setFilter('All');
    setOrdering('None');
    setProducts(originalList);
  };

  return (
    <main>
      <Header />
      <section>
        <div>
          <input
            type="text"
            id="search"
            placeholder="Digite o que você deseja pesquisar..."
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            required
          />
          <div>
            <select value={filter}>
              {optionsKeys.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
              ))}
            </select>

            <select value={ordering}>
              {optionsOrder.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
              ))}
            </select>

            <button type="button" onClick={ () => { handleCleanFilter() } }>Clean Filter</button>
          </div>
        </div>
        <div>
          { isFetching
            ? <p> Loading... </p>
            : (
                <>
                  { products.map((product) => (
                    <div onClick={ () => handleClickCard(product) } product={ product } key={ product.id } />
                  ))}
                </>
            )}
        </div>
      </section>
    </main>
  );
}
