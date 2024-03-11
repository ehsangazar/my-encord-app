import type { MetaFunction } from "@remix-run/node";

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
  return (
    <div>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
    </div>
  );
}
