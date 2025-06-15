'use client';

import Header from "./component/Header";
import FormSubject from "./component/FormSubject";
import Footer from "./component/Footer";

export default function Home() {

  return (
    <div className="wrapper padding">
      <Header />

      <div className="text-content">
        <h2>Din Arborist i Skåne</h2>
        <p>Välkommen till Glabra Trädvård, din lokala arborist i Skåne. Vi erbjuder professionella trädvårdstjänster för att säkerställa att dina träd är friska och välskötta.</p>
        <p>Arborist Göran Vestin</p>
      </div>

      <FormSubject />
      <Footer />


    </div>
  );
}
