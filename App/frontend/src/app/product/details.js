import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateProduct({ productId, productName, productBrand, productModel, productPrice, productColor }) {
  const [name, setName] = useState(productName);
  const [brand, setBrand] = useState(productBrand);
  const [model, setModel] = useState(productModel);
  const [price, setPrice] = useState(productPrice);
  const [color, setColor] = useState(productColor);
  const [warning, setWarning] = useState(0);

  const router = useRouter();

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      await requestPut(`/product/${productId}`, {
        name,
        brand,
        model,
        price,
        color,
      });
      toast.success("Produto atualizado com sucesso!");
      router.push("/");
    } catch (error) {
      toast.error(
        "Sinto muito, verifique se você preencheu as informações corretamente."
      );
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    
    if (warning === 0) {
      setWarning(1);
      toast.warning(
        "Você tem certeza que deseja deletar o produto?"
      );
      return;
    } else {
      try {
        await requestDelete(`/product/${productId}`);
        toast.success("Produto deletado com sucesso!");
        router.push("/");
      } catch (error) {
        toast.error(
          "Sinto muito, tente novamente."
        );
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <div>
          <Link href="/">
            <a>Back</a>
          </Link>
        </div>
        <section>
          <h1>Create New Product</h1>
          <form>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
              />
            </label>
            <label htmlFor="brand">
              Brand:
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={({ target }) => setBrand(target.value)}
                required
              />
            </label>
            <label htmlFor="model">
              Model:
              <input
                type="text"
                id="model"
                value={model}
                onChange={({ target }) => setModel(target.value)}
                required
              />
            </label>
            <label htmlFor="price">
              Price:
              <input
                type="text"
                id="price"
                value={price}
                onChange={({ target }) => setPrice(target.value)}
                required
              />
            </label>
            <label htmlFor="color">
              Color:
              <input
                type="text"
                id="color"
                value={color}
                onChange={({ target }) => setColor(target.value)}
                required
              />
            </label>
          </form>
          <div>
            <button
              type="button"
              onClick={(event) => handleUpdate(event)}
            >
              Update
            </button>
            <button
              type="button"
              onClick={(event) => handleDelete(event)}
            >
              Delete
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
