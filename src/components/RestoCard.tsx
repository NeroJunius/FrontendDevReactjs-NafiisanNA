import {
  Box,
  Text,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
} from "@chakra-ui/react";
import { IRestoCard } from "../interfaces/restaurants";
import DetailResto from "./DetailResto";
import Rating from "./Rating";

export default function RestoCard(props: IRestoCard) {
  return (
    <Box display={"flex"} justifyContent={"center"} mt={10}>
      <Box className={"card"} display={"flex"} flexDirection={"column"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
          <GridItem w="100%">
            <Card maxW="sm" shadow={"md"}>
              <CardBody>
                <Image
                  src={props.resto_picture}
                  borderRadius="lg"
                  fit={"contain"}
                />
                <Box mt={6} gap={3} display={"flex"} flexDirection={"column"}>
                  <Heading size="md">{props.resto_name}</Heading>
                  <Rating rating={props.rating}/>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                      <Text fontSize={"sm"} color="black">
                        {props.categories}
                      </Text>
                      <Text fontSize={"sm"} color="blue.600">
                        ${props.price}
                      </Text>
                    </Box>
                    <Text
                      fontSize={"sm"}
                      color={props.service ? "green.600" : "red.600"}
                    >
                      {props.service ? "Open Now" : "Closed"}
                    </Text>
                  </Box>
                </Box>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box justifyContent={"center"} justifyItems={"center"}>
                  <DetailResto {...props} />
                </Box>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
