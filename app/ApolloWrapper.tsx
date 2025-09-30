"use client";

import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/api/queries";
export function ClientApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
