import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Product1Form } from "../../components";

export default function ManageCode() {
  const breadcrumbs = [{ content: "QR codes", url: "/product1" }];

  return (
    <Page>
      <TitleBar
        title="Select Product to be swapped"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <Product1Form />
    </Page>
  );
}
