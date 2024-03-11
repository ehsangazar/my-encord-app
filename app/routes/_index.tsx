import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout/Layout";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "~/components/Tabs/Tabs";
import { AiFillFile, AiFillProject } from "react-icons/ai";
import { useState } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "~/components/Table/Table";
import UploadFile from "~/components/UploadFile/UploadFile";

export const meta: MetaFunction = () => {
  return [
    { title: "My Encord App" },
    {
      name: "description",
      content: " An app to help predict the objects in an image. ",
    },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleUpload = () => {
    return new Promise((resolve, reject) => {
      // Sample Mocking API Upload Time
      setTimeout(() => {
        // resolve("File Uploaded Successfully!");
        reject("File Upload Failed!");
      }, 2000);
    });
  };

  return (
    <Layout>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabList>
          <Tab icon={<AiFillFile />}>Images</Tab>
          <Tab icon={<AiFillProject />}>Predictions</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div>
              <UploadFile handleUpload={handleUpload} />
            </div>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Filename</Th>
                    <Th>Size</Th>
                    <Th>Created At</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Image 1</Td>
                  </Tr>
                  <Tr>
                    <Td>Image 1</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
