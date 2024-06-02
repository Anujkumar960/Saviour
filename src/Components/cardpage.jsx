import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const CardPage = () => {
    useEffect(() => {
        Aos.init({ duration: 4000, delay: 300 });
      }, []);
      
  return (
    <Box
    w="100%"
    h={["70vh","100vh"]}
    position="relative"
    backgroundImage="url('https://s3-alpha-sig.figma.com/img/7fb8/c9c7/2e63edc105c3925cfa651946f437c2fd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjLcTC3sH3GYbn7re~tH~Nmk1RGHp0R2VmCRcND3C-8~YPtYnKAGwtoRrge6hYpDbiEEjiFS81-GaSkT9E76UPQCb4SI0grIdfxU29vpK3Nqaw3KTU9AUYdwPxjbJzc7JXd5ipQuYTNdD6Y2p-AnWzv8tKVcVhhSBIf1F0BAqao09vOZw5RiVvKueL5m7-qEVbVm4ybeFvPo9Vnoi9ZLk7eWw5E5fLY1Ifd0lWW5htWnhDegKifYhgbKJu-gqjs2ifZNVPGt-qVomH1ScrUAOF69Urdxi83gjySJ89JzuYFalMH-qwUJifSgv3Hn2A961XxqppCaW1mW7Onyc4AzBg__')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    _before={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      bg: "rgba(0, 0, 0, 0.9)",
    }}
  >
    <Flex justifyContent={"center"} mb="8%">
      <Text
        color="#ED0137"
        mt="12"
        className="Home"
        fontSize={["32px","44px","44px","44px"]}
        position="relative"
        zIndex="1"
      >
        Road Map
      </Text>
    </Flex>

    <Grid justifyContent="center" alignItems="center" templateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} pl={[30,35,38,40]} pr={[25,50]}>
      {arr.map((item, index) => (
        <Box
          key={index}
          w={["131px","157px","183px","237px"]}
          h={["193px","232px","271px","349px"]}
          display={{
            base: index >= 2 ? "none" : "block",
            md: "block",
          }}
          data-aos="fade-up"
          borderWidth="2px"
          bg="black"
          borderColor="red"
          position="relative"
          borderRadius="10px"
          zIndex="1"
          mx="8px"
          css={{
            transition: "transform 0.3s ease",
            ":hover": {
                transform: "scale(1.05)",
                cursor:"pointer"
            }
        }}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            opacity={"0.6"}
            backgroundImage={`url('${item.src}')`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius="10px"
            filter="blur(0.5px)"
            transform={item.deg}
            css={{
                transition: "transform 0.3s ease",
                ":hover": {
                    transform: "scale(1.05)",
                    cursor:"pointer"
                }
            }}
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            position="absolute"
            w="100%"
            top={item.top}
            color="white"
            padding={["10px","15px","17px","20px"]}
          >
            <Flex pr="20px" flexDirection="column" rowGap={2}>
              <Text fontSize={["12px","14px","16px","22px"]} fontWeight={500}>
                {item.title}
              </Text>
              <Box fontSize={["9px","13px","15px","17px"]} fontWeight={400} color="#AEB1B8">
                {item.description}
              </Box>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Grid>
  </Box>
  );
};


const arr=[
{ title:"Phase 1",
  deg:"scaleX(-1)",
  top:"50%",
  src:"https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__",
 description:"Technical Readiness and Smart Contract Audit"},
 { title:"Phase 2",
 deg:"scaleX(-1)",
 top:"57%",
 src:"https://s3-alpha-sig.figma.com/img/aa29/8bb9/151666f4ac7fae86b6b63f7e97472d61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZAHaJXiBYfL1h1zgGPIaFE0JavKk6hTn3UOSRgYpS-DqHfNvBX1Zohv99pdXvGSRn2E8qKQy3rUrez0ySAOTwPCu3XeZgk4fsGL8xc-81KN5vvTzjWexDRx4NXnfW6PnIzY8nlwaizp7wImuel-p6v~HAj5yNO4QQQyTkK7Qc8qPTfZ-EK74gDlaMRluU1sJfDwiGihGOhxnVIlyEa~FuAzvJpUmuoERPLFnrrHoRktYitrDFOmbzL41UpIIhJ0qoi6HVz8OPWYXNEAHxe46UXL6RMwmFnwsezpMONedZIB5IboMY7i~3eXxbueFbLgi4yD0~NssIKD~vhbXqHoiw__",
 description:"Increase Liquidity and Trading Volume"},
 { title:"Phase 3",
 deg:"scaleX(-1)",
 top:"57%",
 src:"https://s3-alpha-sig.figma.com/img/6c61/fbae/ca9bd789f6b5490e4ac71b41b57d2d90?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deGMC5f~w0~00xln7rW-M~I4vAdNYdlG~v03ljqEXM5vXwo-mFNNLrO6ROWf-ObqESq9mGhw4680eWL~FrxfeMRBzjjnLujScKOZNuY0ruIhMZxE8DVwytJsLGVOIPi2VjbZp9yeFdDqQgn-uytKsfqgTajXUeZBl6wgKppPQKKomyDmxFOygvozrF6VnP~RRkR3kBOteAASfT9YL4I2CpTDf0JDtxMe8oc5inu0MB6VGXjfLKDBYH~zFbJwsyt5R25d6EKKUg9LGCrr62YohTQs8xxCTGBir4LBt0TR8ztUGcuc2bn9ZJb1aQtE3WihajEH-4eTsGTS6sGmVa-fhA__",
 description:"Community Building and Marketing"},
 { title:"Phase 4",
 deg:"scaleX(-1)",
 top:"57%",
 src:"https://s3-alpha-sig.figma.com/img/e792/f455/d02fe23b0b95b2461d5ab0db33cfb4b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoHmU4eSMr3BrRCqhZU4684944N4vHk3CFWj4zcV~r2Lwras3ip4Q55mWg8jvJaRoiZfA-lXzDxE6zK0s66seFnh4cFV5bkUCf7oxRmwWosNn4InT3~WxIRVJXTruqzwLeK2Kg467xnwbp9B4tOtff46QCteK6wfLR-A2TpQDBKd2dSfGQEwKRBLeZlKdUMt40PuBXlzS4LJm6yE98HrysbllIqXZlFe7dIXoeHkSkDzrWuiTTvKFYS6qqLSBU5P6RgxzCVewvHf69K24gsKLBHBJMJmHqzS0qOYT8j7teh6KaxoLnLef58tI99B9UdGeJQ4l2sygHUmvubcWJMqJw__",
 description:"Ecosystem Expansion and Partnerships"}
]