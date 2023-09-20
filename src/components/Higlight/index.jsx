import { db } from "../../firebase/client";
import {
  getDocs,
  collection,
  query,
  orderBy,
  where,
  limit,
  getDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Highlight() {
  const [product, setProduct] = useState();
  const q = query(
    collection(db, "products"),
    orderBy("releaseDate", "desc"),
    limit(1)
  );

  const getProduct = async () => {
    const querySnapshot = await getDocs(q);
    const webData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProduct(webData[0]);
  };

  useEffect(() => {
    getProduct();
  }, []);

  function HighlightCard(product) {
    if (product) {
      return product.imgPreview.map((img, index) => {
        return (
          <div className="w-full">
            <SwiperSlide key={index}>
              <img src={img} alt="" className="" />
            </SwiperSlide>
          </div>
        );
      });
    }
  }

  return (
    <div className="h-[90vh] relative flex py-5">
      <div className="flex-col w-[30%] py-5 px-2 bg-neutral-900 h-[100%] border-main-red border-y-2">
        <h2 className="text-4xl bg-main-red text-black">
          {product?.title} now available!
        </h2>
        <h3 className="text-xl py-5">on {product?.platform}</h3>
        <p className="text-2xl bg-main-red text-black">{product?.desc}</p>
        <Link to={`/games/game/${product?.id}`}>
        <span className="font-light text-xl ms-20 ps-2 underline italic hover:text-main-red">Check it out!</span>
        </Link>
      </div>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        className="h-[100%] w-[100%] bg-main-red border-main-red border-y-2"
      >
        {product && <>{HighlightCard(product)}</>}
      </Swiper>
    </div>
  );
}

export default Highlight;
