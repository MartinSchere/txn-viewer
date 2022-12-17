import { Alert, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { C, fromHex } from "lucid-cardano";
import { NextSeo } from "next-seo";
import { useState } from "react";

const removeKey = (obj: any, key: string) => {
  return JSON.parse(JSON.stringify(obj, (k, v) => (k === key ? undefined : v)));
};

const Home = () => {
  const [cbor, setCbor] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const onConvert = () => {
    try {
      setResult("");
      setError("");
      const res = JSON.parse(C.Transaction.from_bytes(fromHex(cbor)).to_json());

      setResult(JSON.stringify(removeKey(res, "original_bytes"), null, 2));
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Flex direction="column">
      {error && (
        <Alert status="error">
          <pre>{error}</pre>
        </Alert>
      )}
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        gap={4}
        w="full"
      >
        <NextSeo title="Home" />
        <Box w="50%">
          <Textarea
            placeholder="Input your transaction CBOR here"
            height="70vh"
            value={cbor}
            onChange={(e) => setCbor(e.target.value)}
          />
        </Box>
        <Box
          w="50%"
          bg="gray.600"
          height="70vh"
          borderRadius="md"
          overflow="auto"
        >
          <pre>{result}</pre>
        </Box>
      </Flex>
      <Button mt="2" mx="auto" onClick={onConvert}>
        Convert
      </Button>
    </Flex>
  );
};

export default Home;
