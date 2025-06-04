import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <p>
        This is a starter template for a new Remix application. You can start
        building your app from here.
        XYZ 
      </p>
    </div>
  );
}
