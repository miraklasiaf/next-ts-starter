import chakraTheme from "@chakra-ui/theme"
import foundations from "./foundations"
import styles from "./styles"

export const theme = {
  ...chakraTheme,
  ...foundations,
  styles,
}

export type Theme = typeof theme

export default theme
