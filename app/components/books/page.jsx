"use client";
import React, { useEffect, useState } from "react";
import "../products/products.css";
import pic1 from "../../img/books1.png";
import pic2 from "../../img/books2.png";
import pic3 from "../../img/books3.png";
import pic4 from "../../img/books4.png";
import cartSvg from "../../img/cart.svg";
import darkCartSvg from "../../img/darkCart.svg";
import plusSvg from "../../img/plus.svg";
import minusSvg from "../../img/minus.svg";
// import { useInView } from "react-intersection-observer";
// import { useSpring, animated } from "react-spring";
import Footer from "../Footer/Footer";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";

const Products = (props) => {
  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(props.product);
      toast("Product added to cart", { style: { color: "#9149A3" } });
    }
  };

  return (
    <div className="card-ex">
      <div className="card-text-ex">
        <div className="portada-ex-2">
          <Image
            className="portada-ex-2"
            src={props.product.productImage}
            alt=""
          />
        </div>
        <div className="title-total-ex">
          <div className="title-ex">{props.product.productName}</div>
          <div className="desc-ex">{props.product.productDesc}</div>
          <ul className="sci-x">
            <li>
              <a target="_blank" href="">
                Rs.{props.product.price}
              </a>
            </li>
          </ul>
          <div className="actions-ex">
            <div className="button-exec">
              {/* <label htmlFor="my-drawer-4"> */}
              <div
                className="button-grad1 cart-button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </div>
              {/* </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InnerCard = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  const subTotal = product.price * product.quantity;
  return (
    <div class="courses-container select-none">
      <div style={{height:'160px'}}  class="course">
        <Image src={product.productImage} alt="" class="course-preview"></Image>
        <div class="course-info">
          {/* <div class="progress-container"> */}
          {/* <div class="progress"></div> */}
          {/* <span class="progress-text"> 6/9 Challenges </span> */}
          {/* </div> */}
          <h6>{product.productName}</h6>
          {/* <h2>{product.productDesc}</h2> */}
          <div className="price-row">
            <h2>Price : &nbsp;</h2>{" "}
            <h2>Rs.{new Intl.NumberFormat("en-US").format(product.price)}/-</h2>
          </div>
          <div className="price-row">
            <h2>Subtotal : &nbsp;</h2>{" "}
            <h2>Rs.{new Intl.NumberFormat("en-US").format(subTotal)}/-</h2>
          </div>
          <div class="qty">
            <h2>Quantity</h2>
            <div className="hori-space"></div>
            <i class="fa" onClick={() => decreaseQuantity(product.id)}>
              {" "}
              <Image style={{ textDecoration: "none" }} src={minusSvg} alt="" />
            </i>
            <span class="number">{product.quantity}</span>
            <i class="fa" onClick={() => increaseQuantity(product.id)}>
              {" "}
              <Image style={{ textDecoration: "none" }} src={plusSvg} alt="" />
            </i>
          </div>
          <div
            className="button-grad1 delete-button"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </div>
          {/* <button class="btn">Continue</button> */}
        </div>
      </div>
    </div>
  );
};

const SideBar = ({
  selectedProducts,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  grandTotal,
  totalItems,
  requestModal,
}) => {
  return (
    <div className="drawer drawer-end select-none">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div style={{ marginBottom: "0.7rem" }} className="grand_cont">
            <Image src={darkCartSvg} alt="" />
            <div className="hori-space"></div>
            <p
              style={{ color: "#6B52A3", fontSize: "17px", fontWeight: "bold" }}
            >
              {totalItems} Items
            </p>
          </div>
          {/* Sidebar content here */}
          {selectedProducts && selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <InnerCard
                key={product.id}
                product={product}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeProduct={removeProduct}
              />
            ))
          ) : (
            <p>No products in the cart</p>
          )}
          {selectedProducts && selectedProducts.length > 0 ? (
            <div className="grand_cont">
              <div className="button-grad1 buy-button">
                Rs.{new Intl.NumberFormat("en-US").format(grandTotal)}/-
              </div>
              <div className="hori-space"></div>
              <div
                style={{ width: "130%" }}
                className="button-grad1 buy-button"
                onClick={requestModal}
              >
                Request to Buy
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </div>
  );
};

function ModalBuy({ openModal, onCloseModal, generateSummaryText }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };
  const handleMobileChange = (event) => {
    const newMobile = event.target.value;
    setMobile(newMobile);
  };

  const whatsappForProducts = () => {
    const whatsappBase = "https://wa.me/+919844290460";
    const finalSummary = `Subject : Book Summary \n\nHi Jas Ahuja My name is ${name} and i would like to buy the respective Books which are generated below\n\nMobile No : ${mobile}\n\n${generateSummaryText()}`;
    const encodedQuery = encodeURIComponent(`${finalSummary}`);
    return `${whatsappBase}?text=${encodedQuery}`;
  };
  return (
    <Modal
      show={openModal}
      size="md"
      onClose={onCloseModal}
      popup
      className="custom-modal"
    >
      <Modal.Header className="modal-head-p" />
      <Modal.Body className="modal-body-p">
        <div className="space-y-6">
          <h3 className="text-base font-medium text-white dark:text-white">
            {/* {selectedCard && selectedCard.title} */}
            Note : you will be redirected to whatsapp
          </h3>
          <form id="liveCoaching">
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="name"
                  value="Your Name"
                />
              </div>
              <TextInput
                placeholder="Ex : James"
                id="name"
                type="text"
                value={name}
                onInput={handleNameChange}
                required
              />
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="mobile"
                  value="Mobile Number"
                />
              </div>
              <TextInput
                placeholder="Ex : 10 Digit Mobile Number"
                id="mobile"
                type="number"
                value={mobile}
                onInput={handleMobileChange}
                required
              />

              <div>
                <div className="mb-2 block">
                  <Label
                    className="text-white"
                    htmlFor="query"
                    value="Summary"
                  />
                </div>
                <Textarea
                  className="px-2 py-2 text-base"
                  id="Summary"
                  value={generateSummaryText()}
                  // onChange={(event) => setSummary(event.target.value)}
                  // required
                  rows={5} // Set the number of rows as needed
                  cols={30} // Set the number of columns as needed
                />
              </div>
              {/* <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="Scheduled"
                  value="Scheduled"
                />
              </div>
              <Textarea
                // placeholder="Ex : James"
                id="Scheduled"
                type="text"
                rows={3}
                cols={30}
                // value={}
              /> */}
            </div>
          </form>

          <div className="w-full">
            <a target="_blank" href={whatsappForProducts()}>
              <div className="button-grad1 req-button">
                {" "}
                Request via Whatsapp
              </div>
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function BooksMain() {
  const generateSummaryText = () => {
    let summaryText = "Order Summary:\n\n";
    selectedProducts.forEach((product, index) => {
      const subTotal = product.price * product.quantity;
      summaryText += `${index + 1}). ${
        product.productName
      } \n- Price : Rs.${new Intl.NumberFormat("en-US").format(
        product.price
      )}/- \n- Quantity : ${
        product.quantity
      } No \n- Subtotal : Rs.${new Intl.NumberFormat("en-US").format(
        subTotal
      )}/- \n`;
    });
    summaryText += `\n• Grand Total : Rs.${new Intl.NumberFormat(
      "en-US"
    ).format(grandTotal)}/- `;
    return summaryText;
  };
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  function onOpenModal() {
    setOpenModal(true);
    // console.log("modal triggered");
  }
  function onCloseModal() {
    setOpenModal(false);
    // console.log("modal triggered");
  }
  const [cartCount, setCartCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  // const [selectedProducts, setSelectedProducts] = useState(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });

  useEffect(() => {
    // Define a function to fetch the cart items from localStorage
    const fetchCartItems = () => {
      const savedCart = localStorage.getItem("bookCart");
      if (savedCart) {
        setSelectedProducts(JSON.parse(savedCart));
      } else {
        // If there's no saved cart, you can set it to an empty array
        // or handle the case differently based on your requirements
        setSelectedProducts([]);
      }
    };

    // Call the fetchCartItems function to update the state with localStorage data
    fetchCartItems();

    // Optionally, you can add a listener or dependency here to re-fetch the data
    // when certain conditions change. For example, if another component might
    // update localStorage, you could listen for a custom event and call fetchCartItems
    // in response to that event.
  }, []); // The empty dependency array means this effect runs only once on mount.

  const allProducts = [
    {
      id: 1,
      productName: "Pieces of Light",
      productDesc:
        "Perhaps dealing with moments of clarity, understanding, or epiphanies. It sounds like it could be a compilation of short stories or essays, each shedding light on different facets of life or human understanding.",
      price: 200,
      productImage: pic1,
      quantity: 0,
    },
    {
      id: 2,
      productName: "Sphere Tech",
      productDesc:
        "It could be a comprehensive guide or a speculative fiction novel, delving into how technology shapes our world. The length allows for detailed exploration of technological themes or narratives.",
      price: 300,
      productImage: pic2,
      quantity: 0,
    },
    {
      id: 3,
      productName: "Puzzly Dart",
      productDesc:
        "This title hints at a detailed and possibly epic narrative. It could be a dense, richly woven tapestry of stories or analyses, providing a deep dive into the subject matter it covers.",
      price: 300,
      productImage: pic3,
      quantity: 0,
    },
    {
      id: 4,
      productName: "Maze of World",
      productDesc:
        "Immerse yourself in sleek designs, powerful features, and a seamless experience. Unleash innovation, redefine possibilities, and elevate your lifestyle.",
      price: 300,
      productImage: pic4,
      quantity: 0,
    },
  ];

  const increaseQuantity = (productId) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      // Update localStorage right after updating state
      localStorage.setItem("bookCart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const decreaseQuantity = (productId) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      // Update localStorage right after updating state
      localStorage.setItem("bookCart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const removeProduct = (productId) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("bookCart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
    toast("Product removed from cart", { style: { color: "#9149A3" } });
  };

  //not working the last quantity is not getting triggered
  // const increaseQuantity = (productId) => {
  //   setSelectedProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  //   localStorage.setItem("cart", JSON.stringify(selectedProducts));
  // };

  // const decreaseQuantity = (productId) => {
  //   setSelectedProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId && product.quantity > 0
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product
  //     )
  //   );
  //   localStorage.setItem("cart", JSON.stringify(selectedProducts));
  // };

  const addToCart = (product) => {
    // setCartCount((prevCount) => prevCount + 1);
    // setSelectedProducts((prevProducts) => [...prevProducts, product]);
    // console.log('triggered', selectedProducts);
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      let updatedProducts;
      if (existingProduct) {
        updatedProducts = prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updatedProducts = [...prevProducts, { ...product, quantity: 1 }];
      }

      localStorage.setItem("bookCart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  // useEffect(() => {
  //   const uniqueProductCount = selectedProducts.reduce(
  //     (count, product) => count + product.quantity,
  //     0
  //   );
  //   setCartCount(uniqueProductCount);
  // }, [selectedProducts]);

  // // getting the localstorage product
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   if (savedCart) {
  //     //deserialization
  //     setSelectedProducts(JSON.parse(savedCart));
  //   }
  // }, []);

  //using useEffect because while printing it will print the latest products
  useEffect(() => {
    const uniqueProductCount = selectedProducts.length;
    setCartCount(uniqueProductCount);
    // storing the products in localstorage
    //serialization
    // localStorage.setItem("cart", JSON.stringify(selectedProducts));
    console.log("cart Updated", selectedProducts);
  }, [selectedProducts]);

  const grandTotal = selectedProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const totalItems = selectedProducts.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <main>
      <ToastContainer position="top-left" closeButton={true} />

      <div className="main-exec-out select-none">
        <h1 className="exec-header">Our Books</h1>
        <label htmlFor="my-drawer-4">
          <div className="product-float-pr">
            <div className="product-float-text-pr">
              <div className="row-cart">
                <Image src={cartSvg} alt="" />
                <span className="cart-count">{cartCount}</span>
              </div>
            </div>
          </div>
        </label>

        <div className="main-exec">
          <div className="exec-left"></div>
          <div className="exec-center">
            {allProducts.map((item) => (
              <React.Fragment key={item.id}>
                <Products product={item} onAddToCart={() => addToCart(item)} />
                {<div className="space"></div>}
              </React.Fragment>
            ))}
          </div>
          <div className="exec-right"></div>
        </div>
        <div style={{ height: "100px" }} class="wrp">
          <div class="portada"></div>
          <div class="contenido"></div>
          <div class="curveado">{/* <img src={curve3} /> */}</div>
        </div>
      </div>
      {openModal && (
        <ModalBuy
          openModal={openModal}
          onCloseModal={onCloseModal}
          generateSummaryText={generateSummaryText}
        />
      )}

      <SideBar
        selectedProducts={selectedProducts}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeProduct={removeProduct}
        grandTotal={grandTotal}
        totalItems={totalItems}
        requestModal={onOpenModal}
      />
      <Footer />
    </main>
  );
}

export default BooksMain;
