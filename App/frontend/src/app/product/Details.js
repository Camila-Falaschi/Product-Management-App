import React, { useState } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import Link from "next/link";
import queryString from "query-string";
import { toast } from "react-toastify";
import { requestDelete, requestPut } from "../services/request";

export default function CreateProduct() {
  const router = useRouter();
  const { query } = router;
  const objeto = queryString.parse(query);

  const [name, setName] = useState(objeto.name);
  const [brand, setBrand] = useState(objeto.brand);
  const [model, setModel] = useState(objeto.model);
  const [price, setPrice] = useState(objeto.price);
  const [color, setColor] = useState(objeto.color);
  const [warning, setWarning] = useState(0);

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
      toast.warning("Você tem certeza que deseja deletar o produto?");
      return;
    } else {
      try {
        await requestDelete(`/product/${productId}`);
        toast.success("Produto deletado com sucesso!");
        router.push("/");
      } catch (error) {
        toast.error("Sinto muito, tente novamente.");
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
            <button type="button" onClick={(event) => handleUpdate(event)}>
              Update
            </button>
            <button type="button" onClick={(event) => handleDelete(event)}>
              Delete
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
