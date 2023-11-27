import Accordion from 'react-bootstrap/Accordion';

export const Acordion = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué es el ramen?</Accordion.Header>
        <Accordion.Body>El ramen es un plato japonés de fideos que ha ganado popularidad en todo el mundo. Consiste en fideos chinos servidos en un caldo a base de huesos de cerdo, pollo, pescado o vegetales, generalmente sazonado con salsa de soja o miso. El caldo se acompaña de ingredientes como carne de cerdo, cebolla verde, brotes de bambú, huevo cocido, alga nori y otros condimentos.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Conoces el Takoyaky?</Accordion.Header>
        <Accordion.Body> es un plato japonés popular y delicioso que consiste en bolitas de masa rellenas de pulpo. La masa está hecha de harina, agua, dashi (un caldo japonés) y otros ingredientes, y se cocina en una sartén especial para takoyaki que tiene pequeños orificios redondos.

          La preparación típica del takoyaki implica colocar un trozo de pulpo en cada bolita de masa a medida que se cocina. A medida que las bolitas se cocinan en la sartén, se les da forma esférica y se van volteando para asegurar una cocción uniforme.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
