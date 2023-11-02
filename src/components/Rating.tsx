import { Box } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function Rating(props: { rating: number }) {
  const { rating } = props;

  // Fungsi ini akan menghasilkan array bintang berdasarkan rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Box key={i} as={MdStar} color={i < rating ? "orange.400" : "gray.400"} />
      );
    }
    return stars;
  };

  return <Box display="flex">{renderStars()}</Box>;
}
