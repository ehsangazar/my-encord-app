import getArray from "~/utils/getArrayOfChildren";

interface TableContainerProps {
  children: React.ReactNode;
}

export const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <div className="overflow-x-auto w-full bg-white rounded my-6">
      {getArray(children).map((childNode, childIndex) => {
        if (childNode?.type?.displayName === "Table") {
          return (
            <Table key={`table-${childIndex}`}>
              {getArray(childNode.props.children).map(
                (tableNode, tableIndex) => {
                  if (tableNode?.type?.displayName === "Thead") {
                    return (
                      <Thead key={`thead-${tableIndex}`}>
                        {getArray(tableNode.props.children).map(
                          (theadNode, theadIndex) => {
                            if (theadNode?.type?.displayName === "TrHead") {
                              return (
                                <TrHead key={`tr-${theadIndex}`}>
                                  {getArray(theadNode.props.children).map(
                                    (thNode, thIndex) => {
                                      if (thNode?.type?.displayName === "Th") {
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
                  if (tableNode?.type?.displayName === "Tbody") {
                    return (
                      <Tbody key={`tbody-${tableIndex}`}>
                        {getArray(tableNode.props.children).map(
                          (tbodyNode, tbodyIndex) => {
                            if (tbodyNode?.type?.displayName === "Tr") {
                              return (
                                <Tr key={`tr-${tbodyIndex}`}>
                                  {getArray(tbodyNode.props.children).map(
                                    (trNode, trIndex) => {
                                      if (trNode?.type?.displayName === "Td") {
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
TableContainer.displayName = "TableContainer";

interface TableProps {
  children: React.ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <table className="w-full">{children}</table>;
};
Table.displayName = "Table";

interface TheadProps {
  children: React.ReactNode;
}

export const Thead = ({ children }: TheadProps) => {
  return <thead className="bg-blue-100 text-blue-700">{children}</thead>;
};
Thead.displayName = "Thead";

interface TbodyProps {
  children: React.ReactNode;
}
export const Tbody = ({ children }: TbodyProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
};
Tbody.displayName = "Tbody";

interface TrHeadProps {
  children: React.ReactNode;
}
export const TrHead = ({ children }: TrHeadProps) => {
  return <tr className="bg-blue-100 text-blue-700">{children}</tr>;
};
TrHead.displayName = "TrHead";

interface ThProps {
  children: React.ReactNode;
}
export const Tr = ({ children }: ThProps) => {
  return (
    <tr className="transition-all duration-300 ease-in-out hover:bg-gray-100">
      {children}
    </tr>
  );
};
Tr.displayName = "Tr";

interface TdProps {
  children: React.ReactNode;
}
export const Th = ({ children }: TdProps) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
      {children}
    </th>
  );
};
Th.displayName = "Th";

interface TdProps {
  children: React.ReactNode;
}
export const Td = ({ children }: TdProps) => {
  return (
    <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {children}
    </td>
  );
};
Td.displayName = "Td";
