import Container from "../layout/Container";
import Button from "../ui/Button";

const DeliveryBanner = () => (
  <Container>
    <div className="bg-[#FFAD63] flex  w-full ">
      <div className="pl-24 py-14">
        <p className="text-4xl mb-5">
          Безкоштовна доставка на всі замовлення від 2 000 грн!
        </p>
        <p className="mb-2">
          Обирайте улюблені продукти та отримуйте швидку доставку додому.
        </p>
        <Button variant="primary" text="Замовити зараз" />
      </div>

      <img src="/src/assets/images/mainPage/delivery.png" alt="delivery" />
    </div>
  </Container>
);

export default DeliveryBanner;
