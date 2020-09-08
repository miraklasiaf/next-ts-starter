import { ChakraProvider } from "@chakra-ui/core"
import theme from "@/src/design-system"
import siteConfig from "@/src/configs/site-config"
import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme} portalZIndex={40}>
        <DefaultSeo {...siteConfig.seo} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
