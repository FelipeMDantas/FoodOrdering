import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            At our pizzeria, we blend tradition with innovation, offering a
            diverse menu that caters to both the classic pizza connoisseur and
            the adventurous palate seeking bold and unique combinations.
          </p>
          <p>
            Savor the delight of handpicked toppings, including premium
            pepperoni, fresh vegetables, and fine cheeses, creating a mosaic of
            taste in every bite
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don\t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            href="tel:+46738123123"
            className="text-4xl underline text-gray-500"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
