import { Avatar, Breadcrumb, Button, Col, Divider, Rate, Row } from "antd";
import Section from "../layouts/Section";
import { FlexCol, FlexRow } from "../layouts/Flex";
import { CiHeart } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Card from "../components/common/Card";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function Product() {
  const related_items = [
    {
      title: "ASUS FHD Gaming Laptop",
      img: "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cu7f1QlKRgw5i3OU0uvklfmnM24fioJotbF9iCjtrbRyjL4-JUN0bpWozrj7i7v2ZnjPa6xF41r4wAQxFFB66sFSL38M0-C8Uh~JInG28FqBlF5DidxpzyTHHXOm~~AIgQf7RZCZQUKGPhWiVqx7E2lUnEjzd2KWoI4yCdaLN36ZjDF27z2IFozVMxi34qLK1pwZfhyzZLS52AW33jQgC9uJQD~2X77~4jZAYnJeepBvNZyzr~HSa9oWZbumQi5MLvNm4V7Mb4xlXyUEsCRQnNHBlddcXtVZrUf5wwl~TnNUiij7udtaIsseoeVt5m8kAiTYI18U7QzV7MDh~sMWyQ__",
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
      img: "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n12rloWz7xjqhLGRlo8xYbUu82fXpfc6QcJ4l4maziKJ4HiDNDA3aZgkJWGLyz9AAjdaCX~cIQFEtklYzBcAhhNqq~9Wy~rAQUeex2PlBMj2M3H~ckiqsIOg38sEplgFyx4KZcAJjpRYAtChHOCyOvj7pNGyfhhuErCpYbkN-Djc8vkt~yBEIf0sSm8l~zgsdH0wztXQdM1ghqAhpCqeVpeF919srdxW-2EyK~czGdp~Lg8afz5GthamOrQoChTRwrhiuLcTgAjXrKKMtd9~iLaSKOkknvpqHg3eHy9wr4JWm6pgKSJsUZJ~usQrnoMxt7OM5xKNPoOM4oZtrDfpyg__",
      price: 750,
      discount: 0,
      new: false,
    },
  ];
  const [productCount, setProductCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <Section>
        <Breadcrumb
          items={[
            { title: "Account" },
            { title: "Gaming" },
            { title: "Havic HV G-92 Gamepad" },
          ]}
          className="text-sm font-medium"
          style={{ fontFamily: "poppins" }}
        />
      </Section>
      <Section>
        <FlexRow className="gap-4 flex-wrap md:flex-nowrap ">
          <div className="grid grid-cols-4 md:grid-cols-none md:grid-rows-4 grid-flow-col gap-4 w-full md:w-2/12">
            <div className="p-2 bg-card flex">
              <img
                className="h-24 w-full self-center object-contain"
                src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paQv91upca-qXIMgC-Dc0szlMDtSpJ0HOrixHAVL6Z4fYW1DX1m9xHVlErFwcirNRjBSdWGtCE7SGAG7rFb5meIxAlRBqf66Ijm72qJJO2-z-xHtnkhjj~hdlwrySMBL47RPN9UTG0ek3vrMsbi4goUdj~04Vsn2UHUQrVqvNYG-imEEHetwdTu251Wq8cgLw14zLj3ZNDjeyRzGsLHbfnIGJHmh~-o0Fl2wtM3ZJbrEj~d4xfob1Vk8Fh-2q~1xNQmczRWnaFhpc-PlpTMOfnNjxJdBBgQDHfR23T5ivM5GStrXvvXm5GULW0VJrovINhzDrcliaQF54U3hWXEDgQ__"
                alt=""
              />
            </div>
            <div className="p-2 bg-card flex">
              <img
                className="h-24 w-full self-center object-contain"
                src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paQv91upca-qXIMgC-Dc0szlMDtSpJ0HOrixHAVL6Z4fYW1DX1m9xHVlErFwcirNRjBSdWGtCE7SGAG7rFb5meIxAlRBqf66Ijm72qJJO2-z-xHtnkhjj~hdlwrySMBL47RPN9UTG0ek3vrMsbi4goUdj~04Vsn2UHUQrVqvNYG-imEEHetwdTu251Wq8cgLw14zLj3ZNDjeyRzGsLHbfnIGJHmh~-o0Fl2wtM3ZJbrEj~d4xfob1Vk8Fh-2q~1xNQmczRWnaFhpc-PlpTMOfnNjxJdBBgQDHfR23T5ivM5GStrXvvXm5GULW0VJrovINhzDrcliaQF54U3hWXEDgQ__"
                alt=""
              />
            </div>
            <div className="p-2 bg-card flex">
              <img
                className="h-24 w-full self-center object-contain"
                src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paQv91upca-qXIMgC-Dc0szlMDtSpJ0HOrixHAVL6Z4fYW1DX1m9xHVlErFwcirNRjBSdWGtCE7SGAG7rFb5meIxAlRBqf66Ijm72qJJO2-z-xHtnkhjj~hdlwrySMBL47RPN9UTG0ek3vrMsbi4goUdj~04Vsn2UHUQrVqvNYG-imEEHetwdTu251Wq8cgLw14zLj3ZNDjeyRzGsLHbfnIGJHmh~-o0Fl2wtM3ZJbrEj~d4xfob1Vk8Fh-2q~1xNQmczRWnaFhpc-PlpTMOfnNjxJdBBgQDHfR23T5ivM5GStrXvvXm5GULW0VJrovINhzDrcliaQF54U3hWXEDgQ__"
                alt=""
              />
            </div>
            <div className="p-2 bg-card flex">
              <img
                className="h-24 w-full self-center object-contain"
                src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paQv91upca-qXIMgC-Dc0szlMDtSpJ0HOrixHAVL6Z4fYW1DX1m9xHVlErFwcirNRjBSdWGtCE7SGAG7rFb5meIxAlRBqf66Ijm72qJJO2-z-xHtnkhjj~hdlwrySMBL47RPN9UTG0ek3vrMsbi4goUdj~04Vsn2UHUQrVqvNYG-imEEHetwdTu251Wq8cgLw14zLj3ZNDjeyRzGsLHbfnIGJHmh~-o0Fl2wtM3ZJbrEj~d4xfob1Vk8Fh-2q~1xNQmczRWnaFhpc-PlpTMOfnNjxJdBBgQDHfR23T5ivM5GStrXvvXm5GULW0VJrovINhzDrcliaQF54U3hWXEDgQ__"
                alt=""
              />
            </div>
          </div>
          <div className="p-6 bg-card flex self-start md:self-stretch w-full md:w-5/12">
            <img
              className="self-center object-contain"
              src="https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIdrLe9zACP6NO49fOKQ1Sw0yyT6riNE9XLpkd2kZKnnANx6Jia3t6nkTuLoLe188oPcw-vXmaIBSn71xd~GzEnOPrihp5LXlO~k-4YulW5r5GDmbHmavaWzBUh-5M1dLmGeimNjBGbyWv40ulSrBHXtUX6dlueW05qE7uSJtLKiW8R9yrWvxxldB7ImpTOQdNUavy7K-l91qbcBANSX8pfcsrJ~dZW-6m6GSICbK~AEdyiF5DexLrByDXggUMRr~oK8XnVqoplqbwFUYsS8J3c0kCmsnWA~mjG3e1GGO2QGngfOd1yUJ59zHS7yPuIlhT4wWyn1AK2qSxllXpwgug__"
              alt=""
            />
          </div>
          <FlexCol className="product-details gap-5 md:ml-8 w-full md:w-5/12">
            <div className="font-semibold text-2xl">Havic HV G-92 Gamepad</div>
            <FlexRow className="items-center flex-wrap gap-3">
              <div className="rating">
                <Rate disabled defaultValue={4} className="text-sm" />
              </div>
              <div className="reviews font-normal text-sm">(150 Reviews)</div>
              <Divider type="vertical" className="black font-semibold" />
              <div className="green font-normal text-sm">In Stock</div>
            </FlexRow>
            <div className="product-cost font-normal text-2xl">$192.00</div>
            <div className="product-description font-medium text-sm">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>
            <Divider />
            <FlexRow className="product-colors items-center">
              <div className="font-normal text-xl mr-6">Colours:</div>
              <Avatar
                style={{ background: "#A0BCE0", border: "2px solid black" }}
                size={"small"}
                className="mx-1"
              />
              <Avatar
                style={{ background: "#E07575", border: "0px" }}
                size={"small"}
                className="mx-1"
              />
            </FlexRow>
            <FlexRow className="product-size items-center">
              <div className="font-normal text-xl mr-6">Size:</div>
              <FlexRow className="gap-2">
                <div className="w-9">
                  <Button className="border-black font-medium" block>
                    XS
                  </Button>
                </div>
                <div className="w-9">
                  <Button className="border-black font-medium" block>
                    S
                  </Button>
                </div>
                <div className="w-9">
                  <Button
                    className="border-black font-medium danger-active"
                    block
                  >
                    M
                  </Button>
                </div>
                <div className="w-9">
                  <Button className="border-black font-medium" block>
                    L
                  </Button>
                </div>
                <div className="w-9">
                  <Button className="border-black font-medium" block>
                    XL
                  </Button>
                </div>
              </FlexRow>
            </FlexRow>
            <FlexRow className="gap-4 flex-wrap lg:flex-nowrap">
              <div className="w-5/12">
                <Row className="border rounded-lg overflow-hidden">
                  <Col span={6} className="border-r">
                    <Button
                      size="large"
                      type="text"
                      style={{ padding: 0 }}
                      onClick={() =>
                        productCount > 0 && setProductCount(productCount - 1)
                      }
                      block
                    >
                      <FaMinus />
                    </Button>
                  </Col>
                  <Col span={12} className="text-center self-center text-xl">
                    {productCount}
                  </Col>
                  <Col span={6} className="border-l bg-red">
                    <Button
                      className="white"
                      size="large"
                      type="text"
                      style={{ padding: 0 }}
                      onClick={() => setProductCount(productCount + 1)}
                      block
                    >
                      <FaPlus />
                    </Button>
                  </Col>
                </Row>
              </div>
              <div className="w-5/12">
                <Button className="bg-red text-white" size="large" block>
                  Buy Now
                </Button>
              </div>
              <div className="w-2/12">
                <Button
                  className="p-2 text-3xl"
                  size="large"
                  onClick={() => {
                    isLiked ? setIsLiked(false) : setIsLiked(true);
                  }}
                >
                  {isLiked ? (
                    <IoIosHeart className="red" />
                  ) : (
                    <IoIosHeartEmpty />
                  )}
                </Button>
              </div>
            </FlexRow>
            <FlexCol className="border-2 rounded-md font-medium">
              <FlexRow className="border-b p-5">
                <TbTruckDelivery className="w-1/5 text-5xl mr-2" />
                <FlexCol className="gap-2 pl-2 lg:pl-0">
                  <div className="text-base">Free Delivery</div>
                  <div className="text-sm underline">
                    Enter your postal code for Delivery Availability
                  </div>
                </FlexCol>
              </FlexRow>
              <FlexRow className="border-t p-5">
                <LuRefreshCcw className="w-1/5 text-5xl mr-2" />
                <FlexCol className="gap-2 pl-2 lg:pl-0">
                  <div className="text-base">Free Delivery</div>
                  <div className="text-sm">
                    Free 30 Days Delivery Returns.
                    <span className="underline">Details</span>
                  </div>
                </FlexCol>
              </FlexRow>
            </FlexCol>
          </FlexCol>
        </FlexRow>
      </Section>
      <Section>
        <FlexCol className="gap-5">
          <FlexRow className="gap-2">
            <div className="px-2 py-4 bg-red rounded-sm"></div>
            <div className="red font-medium text-base self-center">
              Related Items
            </div>
          </FlexRow>
          <FlexRow className="flex-wrap justify-between gap-8">
            {related_items.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  discount={item.discount}
                  newItem={item.new}
                  eyeIcon={true}
                  likeIcon={true}
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
