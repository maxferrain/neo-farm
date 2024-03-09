"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";


const productsDefault = [
  {
    "id": "price_1N7qRXCwVDOztGf1RCJRRwIF",
    "object": "price",
    "active": true,
    "billing_scheme": "per_unit",
    "created": 1684114999,
    "currency": "usd",
    "custom_unit_amount": null,
    "livemode": false,
    "lookup_key": null,
    "metadata": {},
    "nickname": "Цифровизация фермерского бизнеса",
    "product": "prod_Ntdin8JypuFSIf",
    "recurring": {
      "aggregate_usage": null,
      "interval": "year",
      "interval_count": 1,
      "trial_period_days": null,
      "usage_type": "licensed"
    },
    "tax_behavior": "unspecified",
    "tiers_mode": null,
    "transform_quantity": null,
    "type": "recurring",
    "unit_amount": 3900,
    "unit_amount_decimal": "3900"
  },
  {
    "id": "price_1N7qCJCwVDOztGf10MIAGSv4",
    "object": "price",
    "active": true,
    "billing_scheme": "per_unit",
    "created": 1684114055,
    "currency": "usd",
    "custom_unit_amount": null,
    "livemode": false,
    "lookup_key": null,
    "metadata": {},
    "nickname": "Соблюдение регулятивных норм и защита данных пользователей",
    "product": "prod_Ntc3RHBwgJvwng",
    "recurring": {
      "aggregate_usage": null,
      "interval": "year",
      "interval_count": 1,
      "trial_period_days": null,
      "usage_type": "licensed"
    },
    "tax_behavior": "unspecified",
    "tiers_mode": null,
    "transform_quantity": null,
    "type": "recurring",
    "unit_amount": 129900,
    "unit_amount_decimal": "129900"
  },
  {
    "id": "price_1N7op0CwVDOztGf1nBZg98jR",
    "object": "price",
    "active": true,
    "billing_scheme": "per_unit",
    "created": 1684108766,
    "currency": "usd",
    "custom_unit_amount": null,
    "livemode": false,
    "lookup_key": null,
    "metadata": {},
    "nickname": "Обучение и привлечение новых фермеров",
    "product": "prod_Ntc3M9mG72JtJj",
    "recurring": {
      "aggregate_usage": null,
      "interval": "year",
      "interval_count": 1,
      "trial_period_days": null,
      "usage_type": "licensed"
    },
    "tax_behavior": "unspecified",
    "tiers_mode": null,
    "transform_quantity": null,
    "type": "recurring",
    "unit_amount": 25900,
    "unit_amount_decimal": "25900"
  }
]
const Pricing = () => {
  const [products, setProducts] = useState(productsDefault ?? []);

  // useEffect(() => {
    // fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
    // const { data } = await axios.get("/api/getproducts");
    // setProducts(data);
  // };

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            title="Цели и Миссия"
            paragraph="Этот раздел дает вам возможность лучше понять, какие задачи мы ставим перед собой и каким образом мы намерены их достигать. Мы нацелены на создание подлинной цифровой революции в сельском хозяйстве, и в этом разделе вы узнаете, как мы планируем этого добиться."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {products.map((product, i) => (
            <PricingBox key={1} product={product} />
          ))}

          {/*<PricingBox
            popular={false}
            packageName="Lite"
            price="19.99"
            subtitle="STARTING FROM"
            btn="Purchase Now"
            purchaseLink="/#"
          >
            <OfferList text="1 User" />
            <OfferList text="All UI components" />
            <OfferList text="Lifetime access" />
            <OfferList text="Free updates" />
            <OfferList text="Use on 1 (one) project" />
            <OfferList text="3 Months support" />
          </PricingBox>
          <PricingBox
            popular={true}
            packageName="Basic"
            price="19.99"
            subtitle="STARTING FROM"
            btn="Purchase Now"
            purchaseLink="/#"
          >
            <OfferList text="1 User" />
            <OfferList text="All UI components" />
            <OfferList text="Lifetime access" />
            <OfferList text="Free updates" />
            <OfferList text="Use on 1 (one) project" />
            <OfferList text="3 Months support" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price="70.99"
            subtitle="STARTING FROM"
            btn="Purchase Now"
            purchaseLink="/#"
          >
            <OfferList text="1 User" />
            <OfferList text="All UI components" />
            <OfferList text="Lifetime access" />
            <OfferList text="Free updates" />
            <OfferList text="Use on 1 (one) project" />
            <OfferList text="3 Months support" />
          </PricingBox> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
