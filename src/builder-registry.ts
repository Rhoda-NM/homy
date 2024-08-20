"use client";
import { builder, Builder } from "@builder.io/react";
import AboutUsOne from "./components/inner-pages/about-us/about-us-one";
import AboutUsTwo from "./components/inner-pages/about-us/about-us-two";
import AccountSettingBody from "./components/dashboard/account-settings/AccountSettingBody";
import AddPropertyBody from "./components/dashboard/add-property/AddPropertyBody";
import AddressAndLocation from "./components/dashboard/profile/AddressAndLocation";
import Agency from "./components/inner-pages/agency/agency";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(AccountSettingBody, {
  name: "AccountSettingBody",
  inputs: [
    {
      name: "FirstName",
      type: "string",
    },
    {
      name: "LastName",
      type: "string",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone",
      type: "number",
    },
    {
      name: "Password",
      type: "string",
    },
  ],
});

Builder.registerComponent(Agency, {
  name: "Agency",
});

Builder.registerComponent(AboutUsOne, {
  name: "AboutUsOne",
});

Builder.registerComponent(AboutUsTwo, {
  name: "AboutUsTwo",
});

Builder.registerComponent(AddPropertyBody, {
  name: 'AddPropertyBody',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Add New Property',
    },
    {
      name: 'fileAttachment',
      type: 'file',
      allowedFileTypes: ['jpg', 'png', 'mp4'],
    },
    
  ],
});

Builder.registerComponent(AddressAndLocation, {
  name: "AddressAndLocation",
});
