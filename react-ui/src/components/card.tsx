import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet
} from '@react-pdf/renderer';
import data from './card.json';

const styles = StyleSheet.create({
  container: {
    fontFamily: "Courier",
    fontSize: "18px",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center"
  },
  card: {
    height: "156px",
    padding: "30px",
    width: "300px"
  },
  uiOnly: {
    backgroundColor: "aliceblue",
    height: "216px", // 3 inches at 72 ppi
    margin: "10px",
    width: "360px" // 5 inches at 72 ppi
  }
});

export const Card = () => {
  const cards = data.map((card, index) => (
    <li key={index} style={{...styles.card, ...styles.uiOnly}}>{card.title}</li>
  ));

  return <ul style={styles.container}>{cards}</ul>;
};

export const CardPDF = () => {
  const cards = data.map((card, index) => {
    return (
      <Page key={index} size={['300', '156']} style={styles.container}>
        <View style={styles.card}>
          <Text>{card.title}</Text>
        </View>
      </Page>
    );
  })

  return (
    <Document>
      {cards}
    </Document>
  );
};
