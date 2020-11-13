import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/components/core"
import { siteConfig } from "@/configs"
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
