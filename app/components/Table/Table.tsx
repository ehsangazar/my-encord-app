import getArray from "~/utils/getArrayOfChildren";

export const TableContainer = ({ children }) => {
  return (
    <div className="overflow-x-auto w-full bg-white rounded my-6">
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
                            if (theadNode?.type?.name === "TrHead") {
                              return (
                                <TrHead key={`tr-${theadIndex}`}>
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
                                </TrHead>
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
  return <table className="w-full">{children}</table>;
};

export const Thead = ({ children }) => {
  return <thead className="bg-blue-100 text-blue-700">{children}</thead>;
};

export const Tbody = ({ children }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
};

export const TrHead = ({ children }) => {
  return <tr className="bg-blue-100 text-blue-700">{children}</tr>;
};

export const Tr = ({ children }) => {
  return (
    <tr className="transition-all duration-300 ease-in-out hover:bg-gray-100">
      {children}
    </tr>
  );
};

export const Th = ({ children }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
      {children}
    </th>
  );
};

export const Td = ({ children }) => {
  return (
    <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {children}
    </td>
  );
};
