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

  return (
    <Layout>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabList>
          <Tab icon={<AiFillFile />}>Images</Tab>
          <Tab icon={<AiFillProject />}>Predictions</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Image</Th>
                    <Th>Image</Th>
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
