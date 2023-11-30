import { PDFDownloadLink } from "@react-pdf/renderer";
import { Card, CardPDF } from "../components/card";

const Main = (): JSX.Element => {
  return (
    <>
      <PDFDownloadLink document={<CardPDF />} fileName="test.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
      <main className="y-wrap">
        <div className="container">
          <Card />
        </div>
      </main>
    </>
  );
};

export default Main;
