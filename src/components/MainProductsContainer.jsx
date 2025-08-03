const demo = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const MainProductsContainer = () => (
  <section className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
    {demo.map(p => (
      <article
        key={p.id}
        className="rounded border p-4 shadow hover:shadow-md transition"
      >
        {p.name}
      </article>
    ))}
  </section>
);

export default MainProductsContainer;
