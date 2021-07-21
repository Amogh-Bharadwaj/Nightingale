import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
//config overrides
import config from "./config";
//colorSchema
import colors from "./colorSchema";

//background color changes
import styles from "./styles";


const overrides = {
  config,
  colors,
  
  styles,

}
export default extendTheme(overrides,withDefaultColorScheme({
  colorScheme: "red",
  components: ["Input"],
}),)