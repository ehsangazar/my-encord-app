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

const ImageTableSection = () => {
  const media = useSelector((state) => state.media.items);

  return (
    <TableContainer>
      <Table>
        <Thead>
          <TrHead>
            <Th>ID</Th>
            <Th>Filename</Th>
            <Th>Size</Th>
            <Th>Created At</Th>
            <Th>Actions</Th>
          </TrHead>
        </Thead>
        <Tbody>
          {media.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.filename}</Td>
              <Td>{item.size}</Td>
              <Td>{new Date(item.createdAt).toLocaleString()}</Td>
              <Td>
                <Button>PREDICT</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ImageTableSection;
