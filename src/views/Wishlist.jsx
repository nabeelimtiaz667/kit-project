import { FlexCol, FlexRow } from "../layouts/Flex";
import Section from "../layouts/Section";
import Card from "../components/common/Card";

export default function Wishlist() {
  const wishlist_items = [
    {
      title: "Gucci Duffle Bag",
      img: "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZSdERsM2mMPpuPKLEkmSWkyre0KFzN4euND~aa2myRBtWBUHNbXrdnbIz78wokGP0YtL3u7JUlZFojxT7iKZ5oaazvDEMQKdsqT2w43Y5B9LW4lv~IIGKVr28UtSwa5vGnujiV3gF~WYTb160J8OWchImTw3zvRAgqovdjw88-3964l1Hc9WBe6VstgUjD6Q0zG1mYnzshNJvCdtV7cg5Ci6o2MbTJpduERvhHxqkPs8o-dMaryMATR-8w5PhaBZolXkD-gdNjyBAcAATrJaZytVPwKA9L0bzsOReR3WOPveJqLJUEJ1hkNZAARFkTZ-9mJo29TI1tRtBZPQQVVmw__",
      price: 1160,
      discount: 35,
    },
    {
      title: "RGB Liquid CPU Cooler",
      img: "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPeoJJJMdNUV0eD-RNVrlC7bjDkcuqDq9bmzvsTK-kQzRHYTgD0foVcZukr-NiOBJghgd4hbkOJof~luBi8mXlUIGMqE1Zpc4Cje~UT4E14AgW1jYx5ozMJzo3QIq-4tmywf1dIBI6PRLiCjzOE3zgoZb6ogZPMuBnY3RwA~yOgkWhRVUDIgt3y6DqRYI~f9pwYjr5lPSI5cge~TGnBhXzhtZ5iMidWa1winIu7CL7xJRpiP-K4CaMpFieZg0qWPG67pfYBGP8I4IU~5CKotK0evs0CiNT7zBngMMYMAyptIJFgEFFTCSKiUj22MHZEhhSKZncC42sjnGWYu6Z8zpQ__  ",
      price: 1960,
      discount: 0,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      img: "https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nonhMfSwws4KV96oGgVG424qQeQUsAaDhlTDfdZ-GpAVbxj~WopSokIJprRG-psvz~pvq9V1KlVI5v4HsHyj1ha-cLaWGnKbVC4-emsmoDNYf-ZOXmFViLmuyBTiiryv9QqG8Rk9teBi-epuwPV-figP7VrpGgCz4wRX9ClCysCOdQEDdqyxMdJP3YZES1FVdq~eFWWrbr3uk~IDhPsn8YXf4hYu44FBLFfkrkngCQdH27zG8U7GKBeIEjOnUFjRFrfKgoFc8byH2JZJjDZRfz5q5uOkP9PBSMTg8Q3N~6gvCIBPeiM2W65bPXMBuFlkZRavhyez7AcMd6vbdTsfpA__",
      price: 850,
      discount: 0,
    },
    {
      title: "Quilted Satin Jacket",
      img: "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8oXBk4dh3UJYzbaLHSKtR1cQ7D-V4Z8CowkutbMn0xP3p89Z5QbzKftSly1cPkWtPYBPjjmjBCeK7svrNplPh1-HDk35mUxMEiVFG4f6RjGggYQF3HThKkRJscJA7oIIabuZcQVFnHOWp-X1qQHtMOHVCi6x~2aVcweMuxxiOOmGMSZlA~Y-NV6W7skzvYm8eOfRSK0VZ-IoJGamX1R~uDHqxg1LwjHZug~mRZSOie9SZfRuLlr6ekaUbA54ZmLyLyFm-XAF89kE2XHNQftiMQ9T-UcdEcj7vei1Xu6z53z-huhJcPsM9C21qcs9GEqwZy2~D-wkfBnKwRJpk-cg__",
      price: 750,
      discount: 0,
    },
  ];

  const forYou_items = [
    {
      title: "ASUS FHD Gaming Laptop",
      img: "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZSdERsM2mMPpuPKLEkmSWkyre0KFzN4euND~aa2myRBtWBUHNbXrdnbIz78wokGP0YtL3u7JUlZFojxT7iKZ5oaazvDEMQKdsqT2w43Y5B9LW4lv~IIGKVr28UtSwa5vGnujiV3gF~WYTb160J8OWchImTw3zvRAgqovdjw88-3964l1Hc9WBe6VstgUjD6Q0zG1mYnzshNJvCdtV7cg5Ci6o2MbTJpduERvhHxqkPs8o-dMaryMATR-8w5PhaBZolXkD-gdNjyBAcAATrJaZytVPwKA9L0bzsOReR3WOPveJqLJUEJ1hkNZAARFkTZ-9mJo29TI1tRtBZPQQVVmw__",
      price: 1160,
      discount: 35,
      new: true,
    },
    {
      title: "IPS LCD Gaming Monitor",
      img: "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPeoJJJMdNUV0eD-RNVrlC7bjDkcuqDq9bmzvsTK-kQzRHYTgD0foVcZukr-NiOBJghgd4hbkOJof~luBi8mXlUIGMqE1Zpc4Cje~UT4E14AgW1jYx5ozMJzo3QIq-4tmywf1dIBI6PRLiCjzOE3zgoZb6ogZPMuBnY3RwA~yOgkWhRVUDIgt3y6DqRYI~f9pwYjr5lPSI5cge~TGnBhXzhtZ5iMidWa1winIu7CL7xJRpiP-K4CaMpFieZg0qWPG67pfYBGP8I4IU~5CKotK0evs0CiNT7zBngMMYMAyptIJFgEFFTCSKiUj22MHZEhhSKZncC42sjnGWYu6Z8zpQ__  ",
      price: 1960,
      discount: 0,
      new: false,
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      img: "https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nonhMfSwws4KV96oGgVG424qQeQUsAaDhlTDfdZ-GpAVbxj~WopSokIJprRG-psvz~pvq9V1KlVI5v4HsHyj1ha-cLaWGnKbVC4-emsmoDNYf-ZOXmFViLmuyBTiiryv9QqG8Rk9teBi-epuwPV-figP7VrpGgCz4wRX9ClCysCOdQEDdqyxMdJP3YZES1FVdq~eFWWrbr3uk~IDhPsn8YXf4hYu44FBLFfkrkngCQdH27zG8U7GKBeIEjOnUFjRFrfKgoFc8byH2JZJjDZRfz5q5uOkP9PBSMTg8Q3N~6gvCIBPeiM2W65bPXMBuFlkZRavhyez7AcMd6vbdTsfpA__",
      price: 850,
      discount: 0,
      new: true,
    },
    {
      title: "AK-900 Wired Keyboard",
      img: "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8oXBk4dh3UJYzbaLHSKtR1cQ7D-V4Z8CowkutbMn0xP3p89Z5QbzKftSly1cPkWtPYBPjjmjBCeK7svrNplPh1-HDk35mUxMEiVFG4f6RjGggYQF3HThKkRJscJA7oIIabuZcQVFnHOWp-X1qQHtMOHVCi6x~2aVcweMuxxiOOmGMSZlA~Y-NV6W7skzvYm8eOfRSK0VZ-IoJGamX1R~uDHqxg1LwjHZug~mRZSOie9SZfRuLlr6ekaUbA54ZmLyLyFm-XAF89kE2XHNQftiMQ9T-UcdEcj7vei1Xu6z53z-huhJcPsM9C21qcs9GEqwZy2~D-wkfBnKwRJpk-cg__",
      price: 750,
      discount: 0,
      new: false,
    },
  ];
  return (
    <>
      <Section>
        <FlexCol className="items-center gap-6">
          <FlexRow className="self-stretch justify-between">
            <div className="font-normal text-xl">Wishlist (4)</div>
            <div className="font-medium text-base">
              <button
                type="button"
                className="px-10 py-3 rounded-md transparent border border-solid border-gray-400 "
              >
                Move All To Bag
              </button>
            </div>
          </FlexRow>
          <FlexRow className="flex-wrap justify-start gap-8">
            {wishlist_items.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  discount={item.discount}
                  trashIcon={true}
                />
              );
            })}
          </FlexRow>
        </FlexCol>
      </Section>
      <Section>
        <FlexCol className="items-center gap-6">
          <FlexRow className="self-stretch justify-between">
            <FlexRow className="gap-2">
              <div className="px-3 bg-red rounded-md"></div>
              <div className="font-normal text-xl self-center">
                Just For You
              </div>
            </FlexRow>
            <div className="font-medium text-base">
              <button
                type="button"
                className="px-10 py-3 rounded-sm transparent border border-solid border-gray-400 "
              >
                See All
              </button>
            </div>
          </FlexRow>
          <FlexRow className="flex-wrap justify-start gap-8">
            {forYou_items.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  discount={item.discount}
                  newItem={item.new}
                  eyeIcon={true}
                  rating={true}
                />
              );
            })}
          </FlexRow>
        </FlexCol>
      </Section>
    </>
  );
}
