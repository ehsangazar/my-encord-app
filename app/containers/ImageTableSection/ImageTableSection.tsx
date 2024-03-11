import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import Modal from "~/components/Modal/Modal";
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
import PredictForm from "../PredictForm/PredictForm";

const ImageTableSection = () => {
  const media = useSelector((state) => state.media.items);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const onClickPredict = (selectedItem) => {
    setOpenModal(true);
    setSelectedMedia(selectedItem);
  };

  const handlePredict = (values) => {
    console.log(values);
  };

  return (
    <>
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
                  <Button onClick={() => onClickPredict(item)}>PREDICT</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        title={`Predict`}
        description={`Fill the form to predict the image 
          ${selectedMedia ? `: ${selectedMedia.filename}` : ""}
          `}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <PredictForm handlePredict={handlePredict} />
        </div>
      </Modal>
    </>
  );
};

export default ImageTableSection;
