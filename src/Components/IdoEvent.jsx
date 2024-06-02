import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Input,
    Text,
  } from "@chakra-ui/react";
  
  import { IoIosCopy } from "react-icons/io";
  import { useEffect, useState } from "react";
  
  export const IdoEvent = () => {
    const data = [
      {
        name: "Total Token Supply",
        value: "20%",
      },
      {
        name: "Soft Cap",
        value: "200 BNB",
      },
      {
        name: "Initial exchange rate",
        value: "1 BNB",
      },
    ];
  
    const data1 = [
      {
        name: "1st Generation",
        value: "5%",
      },
      {
        name: "2nd Generation",
        value: "2%",
      },
    ];
  
    const [seconds, setSeconds] = useState(25 * 3600);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
  
      if (seconds === 0) clearInterval(timer);
  
      return () => clearInterval(timer);
    }, [seconds]);
  
    const formatTime = (totalSeconds) => {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      return `${hours < 10 ? "0" + hours : hours}${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    };
  
    return (
      <Box
        bgImage={"https://s3-alpha-sig.figma.com/img/b6b9/0f7f/8e9b3d8d12c20152d7f3a9b31de44fe8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCYtvR~628jEbUTFcpnz6ogAaDE3ysJ5D5cUi0Wq9Wz1QKJEabU4zd1DnR9LWwclo~hvPTUlIlF3tGRUnx5wrv01asgSn~y8Ye9ahEVu-5T~IJAkKokvfO9qN0VQQl-wllJe2c7A-jVHEAqGqL1k0VZ1diNOLmGKLE4kj1eKp-PT7aiOjEXIXgMYnr5s2Idt-rV~ZWIljgtjXbbtnRgKt3igmvC6OFIsUjxBN958KL2We91IfvNZtO5HUI5dmYdmY8y1vEfp1oYedenQnxSWuFpgq4-y5cj0QHi8~8wC4veprvWG98DC9mmlkSCgpSfm7TpiZu4mnynRLkAsOspuBQ__"}
        width={"100%"}
        height={{ base: "fit-content", md: "1145px" }}
        bgPos={{ base: "50% 35%", md: "0 95%" }}
        bgSize={"cover"}
        _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "rgba(0, 0, 0, 0.5)", 
          }}
      >
        <Box bgColor={"rgba(0, 0, 0, 0.5)"} width={"100%"} height={"100%"}> 
          <Box maxW={"1512px"} mx={"auto"} pt={12}>
            <Text
              fontFamily={"Shojumaru"}
              fontSize={{ base: "28px", md: "40.92px" }}
              fontWeight={"400"}
              lineHeight={{ base: "37px", md: "54.19px" }}
              textAlign={"center"}
              color={"#ED0137"}
            >
              Participate in our IDO Event!
            </Text>
  
            <Flex mt={16} direction={{ base: "column", md: "row" }}>
              <Flex
                width={{ base: "100%", md: "45%" }}
                gap={10}
                direction={"column"}
                justify={"center"}
                align={"center"}
              >
                <Text
                  fontFamily={"ZCOOL KuaiLe"}
                  fontSize={{ bas: "16.92px", md: "20.92px" }}
                  fontWeight={"400"}
                  lineHeight={{ bas: "29.53px", md: "36.51px" }}
                  textAlign={"center"}
                  maxW={"539px"}
                  width={"100%"}
                  color={"#E6E3E3"}
                  display={{ base: "none", md: "block" }}
                >
                  During our IDO event, you will gain early access to our
                  revolutionary ecosystem, designed to empower everyone to share
                  wealth and achieve success.
                </Text>
  
                <Text
                  fontFamily={"ZCOOL KuaiLe"}
                  fontSize={{ bas: "16.92px", md: "20.92px" }}
                  fontWeight={"400"}
                  lineHeight={{ bas: "29.53px", md: "36.51px" }}
                  textAlign={"center"}
                  maxW={"539px"}
                  width={"100%"}
                  color={"#E6E3E3"}
                  display={{ base: "block", md: "none" }}
                >
                  During our IDO event, you will gain early access to our
                  revolutionary ecosystem, designed to empower everyone to share
                  wealth and achieve success. By participating in this exclusive
                  event, you'll secure your position at the forefront of
                  blockchain innovation, with the potential for high rewards.
                </Text>
  
                <Flex direction={"column"} justify={"center"} align={"center"}>
                  <Box
                    width={{ base: " 206.73px", md: "244px" }}
                    height={{ base: "59.31px", md: "70px" }}
                    fontFamily={"Shojumaru"}
                    fontSize={{ flex: "16px", md: "18px" }}
                    fontWeight={400}
                    lineHeight={{ base: "21px", md: "23.84px" }}
                    color={"white"}
                    bg={"#ED0137"}
                    borderRadius={{ base: "16px", md: "20px" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={1}
                  >
                    Token Info
                  </Box>
  
                  <Box
                    mt={{ base: "-30px", md: "-35px" }}
                    width={{ base: "265.11px", md: "412px" }}
                    borderRadius={"20px"}
                    border={"1.5px solid red"}
                    pb={12}
                  >
                    <Grid
                      color={"white"}
                      mt={{ base: 10, md: 16 }}
                      fontFamily={"ZCOOL KuaiLe"}
                      gap={8}
                    >
                      {data.map((item) => {
                        return (
                          <GridItem
                            key={item.name}
                            px={10}
                            fontSize={{ base: "12.87px", md: "20px" }}
                            fontWeight={"400"}
                            lineHeight={{ base: "12.87px", md: "20px" }}
                            textAlign={"left"}
                          >
                            <Flex justify={"space-between"} textAlign={"left"}>
                              <Text textAlign={"left"} maxW={"155px"}>
                                {item.name}
                              </Text>
                              <Text textAlign={"left"} color={"#DF180A"}>
                                {item.value}
                              </Text>
                            </Flex>
                          </GridItem>
                        );
                      })}
                    </Grid>
  
                    <Text
                      fontFamily={"ZCOOL KuaiLe"}
                      color={"#E6E3E3"}
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      textAlign={"center"}
                      mt={8}
                    >
                      Recommended Referral Commission
                    </Text>
  
                    <Grid
                      color={"white"}
                      mt={{ base: 10, md: 10 }}
                      fontFamily={"ZCOOL KuaiLe"}
                      gap={8}
                    >
                      {data1.map((item) => {
                        return (
                          <GridItem
                            key={item.name}
                            px={10}
                            fontSize={{ base: "16px", md: "20px" }}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            textAlign={"left"}
                          >
                            <Flex justify={"space-between"} textAlign={"left"}>
                              <Text textAlign={"left"} maxW={"155px"}>
                                {item.name}
                              </Text>
                              <Text textAlign={"left"} color={"#DF180A"}>
                                {item.value}
                              </Text>
                            </Flex>
                          </GridItem>
                        );
                      })}
                    </Grid>
                  </Box>
                </Flex>
              </Flex>
  
              <Flex
                direction={"column"}
                align={"center"}
                mt={{ base: "45px", md: 0 }}
                ml={{ base: 0, md: "10%" }}
                width={{ base: "100%", md: "45%" }}
              >
                <Flex
                  width={"100%"}
                  direction={"column"}
                  align={"center"}
                  justify={"center"}
                >
                  <Text
                    fontFamily={"Shojumaru"}
                    fontSize={{ base: "24.92px", md: "31.92px" }}
                    fontWeight={400}
                    lineHeight={{ base: "32px", md: "41.25px" }}
                    textAlign={"center"}
                    color={"#E6E3E3"}
                    maxW={"437px"}
                  >
                    IDO Event Countdown
                  </Text>
  
                  <Box
                    mt={{ base: 6, md: 10 }}
                    border={"1.5px solid #ED0137"}
                    borderRadius={"15px"}
                    maxW={"509px"}
                    px={8}
                    py={6}
                    textAlign={"center"}
                    width={"100%"}
                  >
                    <Text
                      fontFamily={"Shojumaru"}
                      fontSize={{ base: "26.92px", md: "38.92px" }}
                      fontWeight={400}
                      lineHeight={{ base: "35.69px", md: "51.52px" }}
                      color={"#ED0137"}
                    >
                      {formatTime(seconds)}
                    </Text>
                  </Box>
                </Flex>
  
                <Flex
                  mt={10}
                  width={"100%"}
                  maxW={"509px"}
                  border={"1.5px solid #ED0137"}
                  borderRadius={"15px"}
                  px={8}
                  py={6}
                  direction={"column"}
                >
                  <Text
                    fontFamily={"Shojumaru"}
                    fontSize={{ base: "12.92px", md: "18.92px" }}
                    fontWeight={400}
                    lineHeight={{ base: "17.12px", md: "25.08px" }}
                    color={"#E6E3E3"}
                  >
                    Enter your BNB address to participate:
                  </Text>
  
                  <Flex mt={4}>
                    <Input
                      placeholder={"Enter your BNB address"}
                      width={"100%"}
                      borderRadius={"10px"}
                      mr={4}
                    />
                    <Button
                      bgColor={"#ED0137"}
                      color={"#E6E3E3"}
                      borderRadius={"10px"}
                      px={6}
                    >
                      Submit
                    </Button>
                  </Flex>
                </Flex>
  
                <Flex
                  mt={10}
                  direction={"column"}
                  align={"center"}
                  width={"100%"}
                  maxW={"509px"}
                  border={"1.5px solid #ED0137"}
                  borderRadius={"15px"}
                  px={8}
                  py={6}
                  textAlign={"center"}
                >
                  <Text
                    fontFamily={"Shojumaru"}
                    fontSize={{ base: "12.92px", md: "18.92px" }}
                    fontWeight={400}
                    lineHeight={{ base: "17.12px", md: "25.08px" }}
                    color={"#E6E3E3"}
                  >
                    Share your referral link:
                  </Text>
  
                  <Flex
                    mt={4}
                    width={"100%"}
                    justify={"space-between"}
                    align={"center"}
                    border={"1.5px solid #ED0137"}
                    borderRadius={"10px"}
                    px={4}
                    py={2}
                  >
                    <Text
                      fontFamily={"ZCOOL KuaiLe"}
                      fontSize={{ base: "12px", md: "16px" }}
                      fontWeight={400}
                      lineHeight={{ base: "17.12px", md: "25.08px" }}
                      color={"#E6E3E3"}
                      maxW={"300px"}
                      isTruncated
                    >
                      https://yourreferrallink.com/username
                    </Text>
  
                    <IoIosCopy color={"#ED0137"} size={"24px"} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  };
  