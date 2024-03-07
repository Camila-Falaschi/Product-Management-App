import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const {
    id,
    name,
    brand,
    model,
    price,
    color,
  } = product;

  return (
    <div>
      <div>
        <p>Name: { name }</p>
        <p>Brand: { brand }</p>
        <p>Model: { model }</p>
        <p>Price: { price }</p>
        <p>Color: { color }</p>
      </div>
      <div>ID: { id }</div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};