import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Text } from 'grommet';
import { Hpe } from 'grommet-icons';
import { Link } from "react-router-dom";

const brands = {
  hpe: {
    name: 'HPE',
    logo: <Hpe color="brand" />,
  },
};

export const AppIdentity = forwardRef(
  ({ brand, logoOnly, title, ...rest }, ref) => {
    const textSize = 'medium';

    return (
      <Link to="/">
        <Button ref={ref} {...rest} plain>
          <Box
            direction="row"
            align="center"
            gap="medium"
            // pad maintains accessible hit target
            // non-responsive maintains same dimensions for mobile
            pad={{ vertical: 'small' }}
            responsive={false}
          >
            {brand && brands[brand].logo}
            {!logoOnly && (
              <Box direction="row" gap="xsmall">
                <Text weight="bold" size={textSize} color="text">
                  {brands[brand].name}
                </Text>
                <Text size={textSize} color="text">
                  {title}
                </Text>
              </Box>
            )}
          </Box>
        </Button>
      </Link>
    );
  },
);

AppIdentity.propTypes = {
  brand: PropTypes.string.isRequired,
  logoOnly: PropTypes.bool,
  title: PropTypes.string,
};

AppIdentity.defaultProps = {
  logoOnly: false,
  title: undefined,
};
