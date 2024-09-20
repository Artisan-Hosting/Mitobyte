import { Box, Link, Spacer, Button } from "@chakra-ui/react";
import { FaGrinStars } from "react-icons/fa";

import { ROUTES } from "@/config/routes";

import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";

export const NavigationDesktop = () => {
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      as="header"
      position="sticky"
      top="0"
      left="0"
      zIndex="2"
      bg="white"
      px={4}
      py={3}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="syntaxBlack.300"
      id="navbar"
    >
      <Box as="nav" display="flex" alignItems="center">
        <Link href={ROUTES.ROOT} mb={1}>
          <LogoSmallMitobyte />
        </Link>
        <Box>
          <Link
            href={ROUTES.EVENTS.ROOT}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Events
          </Link>
          <Link href={ROUTES.TEAM} px={6} py={2} fontWeight="500" fontSize="xl">
            Team
          </Link>
          <Link
            href={ROUTES.EXTERNAL.MAILCHIMP}
            px={6}
            py={2}
            target="_blank"
            fontWeight="500"
            fontSize="xl"
          >
            Contact
          </Link>
          <Link
            href={ROUTES.PROJECTS}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Projects
          </Link>
        </Box>
        <Spacer />
        <Button
          as={Link}
          colorScheme="codeBlue"
          variant="ghost"
          // variant="outline"
          // bg="deployOrange.300"
          // color="white"
          // _hover={{ bg: "deployOrange.400", textDecoration: "none" }}
          // _active={{ bg: "deployOrange.700" }}
          href="https://hcb.hackclub.com/donations/start/mitobyte"
          fontWeight="700"
          fontSize="xl"
          target="_blank"
          rightIcon={<FaGrinStars />}
          size="lg"
        >
          Sponsor us!
        </Button>
      </Box>
    </Box>
  );
};
