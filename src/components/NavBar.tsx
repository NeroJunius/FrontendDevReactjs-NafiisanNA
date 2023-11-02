import { useSortPrice } from "@/hooks/useSortPrice";
import { useSortCategories } from "@/hooks/useSortCategories";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Select,
  Text,
} from "@chakra-ui/react";

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
    highest: 1500,
  },
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
  // const { selectedPrice, setSortPrice, getSelectedPrice } = useSortPrice();
  const {
    selectedCategories,
    setSortCategories,
    getCategories,
    categoriesList,
  } = useSortCategories();

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
          <Text fontSize={"lg"}>Filter By:</Text>
          <Box
            border={"1px solid"}
            borderRadius={"5px"}
            py={2}
            px={2}
            w={40}
            h={10}
          >
            <Radio
              colorScheme={"green"}
              isChecked={_props.isOpen!}
              onChange={() => _props.setIsOpen()}
            >
              <Text>Open Now</Text>
            </Radio>
          </Box>
          {/* price */}
          {/* <Menu closeOnSelect={true}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="outline"
              w={40}
            >
              <Text fontSize={"14px"} textAlign={"left"} isTruncated>
                {getSelectedPrice() ? getSelectedPrice() : "Price"}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => setSortPrice("under $100")}
                className={selectedPrice === "under $100" ? "active" : ""}
              >
                <Text color={"black"}>under $100</Text>
              </MenuItem>
              <MenuItem
                onClick={() => setSortPrice("$100 - $300")}
                className={selectedPrice === "$100 - $300" ? "active" : ""}
              >
                <Text color={"black"}>$100 - $300</Text>
              </MenuItem>
              <MenuItem
                onClick={() => setSortPrice("$300 - $500")}
                className={selectedPrice === "$300 - $500" ? "active" : ""}
              >
                <Text color={"black"}>$300 - $500</Text>
              </MenuItem>
              <MenuItem
                onClick={() => setSortPrice("$500 - $700")}
                className={selectedPrice === "$500 - $700" ? "active" : ""}
              >
                <Text color={"black"}>$500 - $700</Text>
              </MenuItem>
              <MenuItem
                onClick={() => setSortPrice("$700 - $900")}
                className={selectedPrice === "$700 - $900" ? "active" : ""}
              >
                <Text color={"black"}>$700 - $900</Text>
              </MenuItem>
              <MenuItem
                onClick={() => setSortPrice("above $900")}
                className={selectedPrice === "above $900" ? "active" : ""}
              >
                <Text color={"black"}>above $900</Text>
              </MenuItem>
            </MenuList>
          </Menu> */}

          <Select
            w={40}
            onChange={(e) =>
              _props.setSortPrice(
                rangePrice.filter((rate) => rate.lowest === +e.target.value)[0]
              )
            }
          >
            {rangePrice.map((rate) => (
              <option key={rate.toString()} value={rate.lowest}>
                ${rate.lowest} - ${rate.highest}
              </option>
            ))}
          </Select>

          {/* category */}
          <Select
            w={60}
            onChange={(e) => _props.setSortCategories(e.target.value)}
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
