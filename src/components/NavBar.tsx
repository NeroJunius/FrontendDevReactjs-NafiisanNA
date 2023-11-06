import { useSortCategories } from "@/hooks/useSortCategories";
import { Box, Button, Checkbox, Select, Text } from "@chakra-ui/react";

interface INavBar {
  selectedPrice: string;
  selectedCategories: string;
  isOpen: boolean | null;
  setSortPrice: (option: { lowest: number; highest: number }) => void;
  setSortCategories: (option: string) => void;
  setIsOpen: () => void;
  getSelectedPrice: () => string;
  getCategories: () => string;
}

const rangePrice = [
  {
    lowest: 0,
    highest: 100,
  },
  {
    lowest: 100,
    highest: 300,
  },
  {
    lowest: 300,
    highest: 500,
  },
  {
    lowest: 500,
    highest: 700,
  },
  {
    lowest: 700,
    highest: 900,
  },
  {
    lowest: 900,
    highest: 1500,
  },
];

export default function NavBar(_props: INavBar) {
  const { categoriesList } = useSortCategories();

  return (
    <>
      <Box
        display={"flex"}
        color={"white"}
        border={"1px solid white"}
        borderRadius={"10px"}
        justifyContent={"space-between"}
        p={2}
        mt={6}
      >
        <Box className="left" py={3} gap={5} display={"flex"}>
          <Text fontSize={"lg"} color={"color"}>
            Filter By:
          </Text>
          <Box
            border={"1px solid black"}
            borderRadius={"5px"}
            py={2}
            px={2}
            w={40}
            h={10}
          >
            <Checkbox
              colorScheme={"green"}
              isChecked={_props.isOpen!}
              onChange={() => _props.setIsOpen()}
            >
              <Text color={"black"}>Open Now</Text>
            </Checkbox>
          </Box>

          <Select
            w={40}
            color={"black"}
            onChange={(e) => {
              const selectedValue = +e.target.value;        
              if (selectedValue === 0) {              
                _props.setSortPrice({ lowest: 0, highest: 1500 });
              } else {
                _props.setSortPrice(
                  rangePrice.find((rate) => rate.lowest === selectedValue)!
                );
              }
            }}
          >
            <option key="all" value="0">
              Price
            </option>
            {rangePrice.map((rate) => (
              <option key={rate.lowest.toString()} value={rate.lowest}>
                ${rate.lowest} - ${rate.highest}
              </option>
            ))}
          </Select>

          {/* category */}
          <Select
            w={60}
            color={"black"}
            onChange={(e) => {
              const selectedCategories = e.target.value;
              if (selectedCategories === "Categories") {
                _props.setSortCategories("");
              } else {
                _props.setSortCategories(selectedCategories);
              }
            }} 
          >
            {categoriesList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>

        <Box className="right" py={3} gap={3} display={"flex"}>
          <Button variant={"solid"} width={40}>
            Clear All
          </Button>
        </Box>
      </Box>
    </>
  );
}
