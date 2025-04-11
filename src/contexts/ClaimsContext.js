import React from 'react';

const ClaimsContext = React.createContext({
  claims: [],
  addClaim: () => {},
});

export { ClaimsContext };