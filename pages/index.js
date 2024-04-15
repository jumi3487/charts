import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import VerticalBar from "@/components/VerticalBar";
import HorizontalBar from "@/components/HorizontalBar";
import PieChart from "@/components/PieChart";



export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalBar/>
        <HorizontalBar/>
        <PieChart/>
      </main>
    </>
  );
}
