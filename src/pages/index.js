// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Meta from "@/components/meta";
import Container from "@/components/container";
// import styles from "@/styles/Home.module.css";
// import React from "react";
import Hero from "./hero";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      
    </Container>
  );
}
