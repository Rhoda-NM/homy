import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
export const runtime = "edge";

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const builderModelName = "page";

  // Construct the URL path from the `params.page` array
  const urlPath = "/" + (params?.page?.join("/") || "");

  // Fetch the content from Builder based on the URL path
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

  // Render the Builder content
  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}

