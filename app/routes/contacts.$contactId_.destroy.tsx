import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";

import { deleteContact } from "../data";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  console.log("action for DestroyContact");
  await deleteContact(params.contactId);
  return redirect("/");
};
