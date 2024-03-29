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

import UploadSection from "~/containers/UploadSection/UploadSection";
import ImageTableSection from "~/containers/ImageTableSection/ImageTableSection";
import PredictionTableSection from "~/containers/PredictionTableSection/PredictionTableSection";

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
            <UploadSection />
            <ImageTableSection />
          </TabPanel>
          <TabPanel>
            <PredictionTableSection />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
