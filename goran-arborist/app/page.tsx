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
        <p>Välkommen till Glabra Trädvård.</p>
        <p>Vi erbjuder professionella trädvårdstjänster</p>
        <p>för friska och välskötta träd.</p>
        <p>Trädfällning/Beskärning/Plantering/Riskbedömning och mycket mer.</p>
        <p>Vi är en pålitlig partner vid samtliga trädvårdsbehov.</p>
        <p>Arborist Göran Vestin</p>
      </div>

      <FormSubject />
      <Footer />


    </div>
  );
}
