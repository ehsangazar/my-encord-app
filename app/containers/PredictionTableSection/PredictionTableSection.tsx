import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { selectPrediction } from "~/reducers/predictiontReducer";
import { RootState } from "~/reducers/store";

const PredictionTableSection = () => {
  const dispatch = useDispatch();
  const predictions = useSelector((state: RootState) => state.prediction.items);
  const medias = useSelector((state: RootState) => state.media.items);
  const selectedPredictionId = useSelector(
    (state: RootState) => state.prediction.selectedItemId
  );

  const selectedPrediction = predictions.find(
    (item) => item.predctionId === selectedPredictionId
  );

  const selectedMedia = medias.find(
    (item) => item.id === selectedPrediction?.mediaId
  );

  const [openModal, setOpenModal] = useState(false);

  const onClickView = (predctionId: number) => {
    setOpenModal(true);
    dispatch(selectPrediction(predctionId));
  };

  console.log("debug selectedPrediction", selectedPrediction);
  console.log("debug selectedMedia", selectedMedia);

  if (!predictions.length) {
    return <div>No Predictions Found</div>;
  }

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
            {predictions.map((item) => (
              <Tr key={item.predctionId}>
                <Td>{item.predctionId}</Td>
                <Td>{item.modal.title}</Td>
                <Td>{item.modal.description}</Td>
                <Td>{new Date(item.modal.timestamp).toLocaleString()}</Td>
                <Td>
                  <Button onClick={() => onClickView(item.predctionId)}>
                    VIEW
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        title={`VIEW`}
        description={`View the prediction`}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        {selectedPrediction && (
          <div>
            <img
              src={selectedMedia?.url}
              alt={selectedPrediction.media?.filename}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default PredictionTableSection;
