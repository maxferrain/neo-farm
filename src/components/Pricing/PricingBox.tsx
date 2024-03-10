import axios from 'axios';
import React from 'react';
import OfferList from './OfferList';

interface PricingBoxProps {
  price: any;
  purchaseLink: string;
  packageName: string;
  btn: string;
  popular?: boolean;
  subtitle: string;
  children: React.ReactNode;
}

const PricingBox = ({product}) => {
  // const {} = product;

  // POST request
  const handleSubscription = async (e) => {
    e.preventDefault();
    // const { data } = await axios.post(
    //   "/api/payment",
    //   {
    //     priceId: product.id,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   },
    // );
    // window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative md:h-[360px] lg:h-[340px] z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {/*{product.nickname === "Premium" && (*/}
        {/*  <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">*/}
        {/*    Recommended*/}
        {/*  </p>*/}
        {/*)}*/}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">{product.nickname}</span>
        {/*<h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">*/}
        {/*  <span className="text-xl font-medium">$ </span>*/}
        {/*  <span className="-ml-1 -tracking-[2px]">*/}
        {/*    {(product.unit_amount / 100).toLocaleString("en-US", {*/}
        {/*      currency: "USD",*/}
        {/*    })}*/}
        {/*  </span>*/}
        {/*  <span className="text-base font-normal text-body-color dark:text-dark-6">*/}
        {/*    {" "}*/}
        {/*    Per Month*/}
        {/*  </span>*/}
        {/*</h2>*/}

        <div>
          {/*<h3 className="mb-5 text-lg font-medium text-dark dark:text-white">*/}
          {/*  Features*/}
          {/*</h3>*/}
          <div>
            {product.nickname === 'Цифровизация фермерского бизнеса' && (
              <>
                <OfferList text="Упрощение управления активами" />
                <OfferList text="Расширение рыночного присутствия" />
                <OfferList text="Оптимизация финансовых операций" />
                <OfferList text="Внедрение инновационных технологий" />
              </>
            )}
            {product.nickname === 'Обучение и привлечение новых фермеров' && (
              <>
                <OfferList text="Создание обучающих материалов" />
                <OfferList text="Организация образовательных мероприятий" />
                <OfferList text="Привлечение молодежи в агробизнес" />
              </>
            )}
            {product.nickname === 'Соблюдение регулятивных норм и защита данных пользователей' && (
              <>
                <OfferList text="Регулятивное соответствие" />
                <OfferList text="Обеспечение безопасности данных" />
                <OfferList text="Повышение прозрачности операций" />
                <OfferList text="Защита цифровых активов" />
              </>
            )}
          </div>
        </div>
        {/*<div className="w-full">*/}
        {/*  <button*/}
        {/*    onClick={handleSubscription}*/}
        {/*    className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"*/}
        {/*  >*/}
        {/*    Узнать подробнее*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default PricingBox;
