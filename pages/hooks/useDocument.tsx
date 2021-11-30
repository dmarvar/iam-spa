import React from "react";

const useDocument = () => {
  const [_document, set_document] = React.useState<Document | null>(null);

  React.useEffect(() => {
    set_document(document);
  }, []);

  return _document;
};

export default useDocument;
