import React, {useContext} from 'react';

const DiscussionContext = React.createContext();

function DiscussionContextProvider({children, value}) {
  return (
    <DiscussionContext.Provider value={value}>
      {children}
    </DiscussionContext.Provider>
  );
}

function useDiscussionContext() {
  const context = useContext(DiscussionContext);
  if ( context === undefined) {
    throw new Error('useDiscussion must be used within a DiscussionContextProvider');
  }
  return context;
}

export {
  DiscussionContextProvider,
  useDiscussionContext,
};
