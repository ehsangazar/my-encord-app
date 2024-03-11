import { useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TrHead,
} from "~/components/Table/Table";
import { RootState } from "~/reducers/store";

const PredictionTableSection = () => {
  const prediction = useSelector((state: RootState) => state.prediction.items);

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <TrHead>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Timestamp</Th>
              <Th>Button</Th>
            </TrHead>
          </Thead>
          <Tbody>
            {prediction.map((item) => (
              <Tr key={item.media.id}>
                <Td>{item.media.id}</Td>
                <Td>{item.media.title}</Td>
                <Td>{item.media.description}</Td>
                <Td>{new Date(item.media.timestamp).toLocaleString()}</Td>
                <Td>
                  <Button>VIEW</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PredictionTableSection;
