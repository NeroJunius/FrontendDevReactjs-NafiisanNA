import { Box, Button, Center, Text } from "@chakra-ui/react";
import RestoBody from "@/components/RestoCard";
import NavBar from "../components/NavBar";
import { useFetchResto } from "@/hooks/useRestoCard";
import { useSortPrice } from "@/hooks/useSortPrice";
import { useSortCategories } from "@/hooks/useSortCategories";
import { useState } from "react";

export default function MainPage() {
  const restoCard = useFetchResto();
  const { selectedPrice, getSelectedPrice } = useSortPrice();
  const { selectedCategories, getCategories } =
    useSortCategories();

  const [isOpen, setisOpen] = useState<boolean | null>(null);
  const [rangePrice, setrangePrice] = useState({
    lowest: 0,
    highest: 1500,
  });
  const [category, setCategory] = useState("");
   const [itemsToDisplay, setItemsToDisplay] = useState(8); // Number of items to display

  // Function to increment the number of items to display
  const loadMoreItems = () => {
    setItemsToDisplay((prev) => prev + 8);
  };  

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} mx={4} my={4} gap={3}>
        <Box py={3}>
          <Text fontSize="5xl">Restaurants</Text>
          <Text mt={2}>Lorem ipsum dolor sit amet</Text>
        </Box>
        <Box>
          <NavBar
            selectedPrice={selectedPrice}
            selectedCategories={selectedCategories}
            setSortPrice={(val) => setrangePrice(val)}
            setSortCategories={(val) => setCategory(val)}
            getSelectedPrice={getSelectedPrice}
            getCategories={getCategories}
            isOpen={isOpen}
            setIsOpen={() => setisOpen((prev) => !prev)}
          />
        </Box>
        <Box>
          <Box>
            <Text fontSize="3xl" mb={4}>
              All Restaurants
            </Text>
          </Box>
          <Box display={"grid"} gridTemplateColumns="repeat(4, 1fr)" gap={1}>
            {restoCard
              .filter((item) =>
                category.length > 0
                  ? item.categories
                      .toLowerCase()
                      .includes(category.toLowerCase())
                  : item.categories
              )
              .filter((item) => {
                return (
                  item.price >= rangePrice.lowest &&
                  item.price <= rangePrice.highest
                );
              })
              .filter((item) => {
                if (isOpen === false) {
                  return item;
                }
                return item.service === true;
              })
              .slice(0, itemsToDisplay)
              .map((resto) => {
                return (
                  <RestoBody
                    key={resto.id}
                    id={resto.id}
                    resto_picture={resto.resto_picture}
                    resto_name={resto.resto_name}
                    rating={resto.rating}
                    resto_description={resto.resto_description}
                    categories={resto.categories}
                    price={resto.price}
                    service={resto.service}
                    isFiltered={true}
                  />
                );
              })}
          </Box>
        </Box>
        {restoCard.length > itemsToDisplay && (
        <Center mt={10}>
          <Button variant={"solid"} colorScheme={"blue"} width={60} onClick={loadMoreItems}>
            LOAD MORE
          </Button>
        </Center>
        )}
      </Box>
    </>
  );
}
