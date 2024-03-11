import getArray from "~/utils/getArrayOfChildren";

export const TableContainer = ({ children }) => {
  return (
    <div>
      {getArray(children).map((childNode, childIndex) => {
        if (childNode?.type?.name === "Table") {
          return (
            <Table key={`table-${childIndex}`}>
              {getArray(childNode.props.children).map(
                (tableNode, tableIndex) => {
                  if (tableNode?.type?.name === "Thead") {
                    return (
                      <Thead key={`thead-${tableIndex}`}>
                        {getArray(tableNode.props.children).map(
                          (theadNode, theadIndex) => {
                            if (theadNode?.type?.name === "Tr") {
                              return (
                                <Tr key={`tr-${theadIndex}`}>
                                  {getArray(theadNode.props.children).map(
                                    (thNode, thIndex) => {
                                      if (thNode?.type?.name === "Th") {
                                        return (
                                          <Th key={`th-${thIndex}`}>
                                            {thNode.props.children}
                                          </Th>
                                        );
                                      }
                                    }
                                  )}
                                </Tr>
                              );
                            }
                          }
                        )}
                      </Thead>
                    );
                  }
                }
              )}
              {getArray(childNode.props.children).map(
                (tableNode, tableIndex) => {
                  if (tableNode?.type?.name === "Tbody") {
                    return (
                      <Tbody key={`tbody-${tableIndex}`}>
                        {getArray(tableNode.props.children).map(
                          (tbodyNode, tbodyIndex) => {
                            if (tbodyNode?.type?.name === "Tr") {
                              return (
                                <Tr key={`tr-${tbodyIndex}`}>
                                  {getArray(tbodyNode.props.children).map(
                                    (trNode, trIndex) => {
                                      if (trNode?.type?.name === "Td") {
                                        return (
                                          <Td key={`td-${trIndex}`}>
                                            {trNode.props.children}
                                          </Td>
                                        );
                                      }
                                    }
                                  )}
                                </Tr>
                              );
                            }
                          }
                        )}
                      </Tbody>
                    );
                  }
                }
              )}
            </Table>
          );
        }
      })}
    </div>
  );
};

export const Table = ({ children }) => {
  return <table>{children}</table>;
};

export const Thead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const Tr = ({ children }) => {
  return <tr>{children}</tr>;
};

export const Th = ({ children }) => {
  return <th>{children}</th>;
};

export const Td = ({ children }) => {
  return <td>{children}</td>;
};
