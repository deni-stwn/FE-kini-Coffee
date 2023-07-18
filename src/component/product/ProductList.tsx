import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomButtonGroupAsArrows } from "../button/buttonSlider";
import { ProductComponent } from "./productComponent";
import Title from "../title";
import { responsive } from "../../ts/responsiveSliderCard";
import ButtonPagination from "../button/ButtonPagination";
import { fetchDataApi } from "../../services/api";
import { ProductInterface } from "../../interface/productsInterface";
import PlaceholderProductComponent from "./placeholderProduct";

const ProductList: React.FC = () => {
  const [data, setData] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const fetchData = async () => {
    try {
      const res = await fetchDataApi(`/products?page=${page}&limit=${limit}`);
      const { data, totalPages: total } = res;
      setData(data);
      setTotalPages(total);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center gap-5 md:gap-16 mx-10 md:mx-20 my-20">
        <PlaceholderProductComponent />
        <PlaceholderProductComponent />
        <div className="hidden md:block">
          <PlaceholderProductComponent />
        </div>
      </div>
    );
  if (error) return <div></div>;

  const productData = data?.map((product) => (
    <ProductComponent
      key={product.id}
      image={product.image}
      alt={"images"}
      title={product.title}
      message={product.message}
      phoneNumber={product.phonenumber}
    />
  ));

  const showPagination = totalPages > 1;

  return (
    <div className="mt-16 md:mt-[139px]">
      <Title title={"Produk Kami"} />
      <div className="mx-4 md:mx-6 lg:mx-11 xl:mx-20 md:w-auto relative">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-padding-bottom"
          customButtonGroup={
            <CustomButtonGroupAsArrows
              next={undefined}
              previous={undefined}
              data={data}
            />
          }
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={false}
        >
          {productData}
        </Carousel>
        <div className="absolute -bottom-5 ml-2 md:ml-3 xl:ml-5">
          {showPagination && (
            <ButtonPagination
              handlePrev={handlePrevPage}
              handleNext={handleNextPage}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
