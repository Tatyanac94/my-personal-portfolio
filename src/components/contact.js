import React from "react";
import { useClient } from 'next/client'; // Import the useClient hook
import dynamic from 'next/dynamic';

const DynamicContactComponent = dynamic(() => import('../app/contact/page'), {
  ssr: false,
});

export default function ContactPage() {
  useClient(); // Use the useClient hook to mark this component as a Client Component

  return (
    <div p-5 m-5 border border-black rounded-md bg-emerald-500>
      <h1>Contact Page</h1>
      <DynamicContactComponent />
    </div>
  );
}
