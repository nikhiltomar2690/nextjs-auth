import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientComponent from "@/components/ClientComponentSignout";

const Home = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return <ClientComponent />;
};

export default Home;
