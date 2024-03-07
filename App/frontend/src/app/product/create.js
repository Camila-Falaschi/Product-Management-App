import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const verifyName = name != "";
    const verifyBrand = brand != "";
    const verifyModel = model != "";
    const verifyPrice = price != "";
    const verifyColor = color != "";
    if (
      !verifyName &&
      !verifyBrand &&
      !verifyModel &&
      !verifyPrice &&
      !verifyColor
    )
      setIsDisabled(true);
    else setIsDisabled(false);
  }, [name, brand, model, price, color]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await requestPost("/product", {
        name,
        brand,
        model,
        price,
        color,
      });
      toast.success("Produto cadastrado com sucesso!");
      router.push("/");
    } catch (error) {
      toast.error(
        "Sinto muito, verifique se você preencheu as informações corretamente."
      );
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
            <button
              type="submit"
              onClick={(event) => handleSubmit(event)}
              disabled={isDisabled}
            >
              Criar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
