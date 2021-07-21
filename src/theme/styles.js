import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
      body: {
        bg: mode('black','black')(props),
      },
    }),
  };

export default styles;