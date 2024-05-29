import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, FigureCaption } from 'react-bootstrap';
import {
  FaComment,
  FaLaughBeam,
  FaMicrophone,
  FaMicrophoneAlt,
  FaTools,
  FaRulerCombined,
} from 'react-icons/fa';
import styles from '../styles/index.module.css';

function BackGroundColoredDiv({ children, styling }) {
  //Creates a colored background for a div
  return <div style={styling}>{children}</div>;
}
function ImageHolder({ children }) {
  // Holds the FA images.
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '3rem',
        marginRight: '3rem',
      }}
    >
      {children}
    </div>
  );
}

function InfoNode({ children, styling }) {
  // This creates info nodes to spirnkle across the screen.
  return (
    <div className={styles.nodes} style={styling}>
      {children}
    </div>
  );
}

function InfoCard({ children, styling }) {
  // This creates the four info cards on screen.
  return (
    <div className={styles.cards} style={styling}>
      {children}
    </div>
  );
}

function LeftContain({ children, styling }) {
  // Creates a container that starts its elements on the left.
  return (
    <div className={styles.nodeL} style={styling}>
      {children}
    </div>
  );
}

function RightContain({ children, styling }) {
  // Creates a container that starts its elements on the right.
  return (
    <div className={styles.nodeR} style={styling}>
      {children}
    </div>
  );
}

function Section({ children, styling }) {
  // This creates the different sections that hold the info nodes on screen.
  return (
    <div className={styles.higher} style={styling}>
      {children}
    </div>
  );
}

function Heading4({ children, styling }) {
  //Creates styled headings.
  return (
    <h4 className={styles.headings4} style={styling}>
      {children}
    </h4>
  );
}

function Paragraph({ children, styling }) {
  // Creates styled paragraphs.
  return (
    <p className={styles.paragraphs} style={styling}>
      {children}
    </p>
  );
}

function Index() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log('entry: ' + entries[0]);
  //       entries.forEach((e) => {
  //         if (e.isIntersecting) e.target.style.opacity = 0.4;
  //       });
  //     },
  //     {
  //       threshold: 1,
  //     }
  //   );

  //   observer.observe(document.querySelector('figure'));
  // });

  return (
    <main className={styles.para}>
      <Layout>
        <div className={styles.header}>
          <h1>Welcome to Music CPR</h1>
        </div>
        <div className={styles.container}>
          <Section
            className={styles.higher}
            styling={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <p>
            MusicCPR is a free platform that facilitates music teachers'
            collection of individual student achievement data that aligns with
            ensemble repertoire and artistic processes (create, perform,
            respond, connect) described in National Standards for Arts
            Education.
          </p> */}
            <figure
              style={{
                width: '50vw',
                margin: '5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="MusicCPR-logo.png"
                style={{ width: '50%', height: 'auto', minWidth: '200px' }}
              ></img>
              <figcaption
                style={{
                  textAlign: 'center',
                  margin: '1rem',
                  overflow: 'hidden',
                  fontSize: '2rem',
                  fontWeight: '600',
                }}
              >
                Music Should be for Everyone!
              </figcaption>
            </figure>
            <InfoNode
              styling={{
                margin: '6rem',
                backgroundColor: 'gray',
                width: '50%',
                backgroundColor: '#BE8CEC',
              }}
            >
              <h3 className={styles.heading3}>
                Standards-Based Music Education
              </h3>
              <Paragraph style={{ margin: '2rem', marginBottom: '0' }}>
                Music CPR is a web based appilcation that faciliates and
                educates students to create, perform, respond, and connect
                through msuic.
              </Paragraph>
            </InfoNode>
          </Section>
          <BackGroundColoredDiv
            styling={{
              backgroundColor: '#AF91CB',
              zIndex: '1',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Section
              styling={{
                padding: '8rem',
                paddingLeft: '5rem',
                paddingRight: '5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                backgroundColor: 'transparent',
              }}
            >
              <InfoCard
                styling={{
                  backgroundColor: '#8D45D0',
                }}
              >
                <Heading4>Create</Heading4>
                <Paragraph
                  styling={{
                    flexGrow: '0.7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  Learn to create music in new and unqiue ways.
                </Paragraph>
              </InfoCard>

              <InfoCard
                styling={{
                  backgroundColor: '#c98fff',
                }}
              >
                <Heading4>Perform</Heading4>
                <Paragraph
                  styling={{
                    flexGrow: '0.7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  Master the ability to perform your own music.
                </Paragraph>
              </InfoCard>

              <InfoCard
                styling={{
                  backgroundColor: '#8D45D0',
                }}
              >
                <Heading4>Respond</Heading4>
                <Paragraph
                  styling={{
                    flexGrow: '0.7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  Express any of your thoughts and respond to music heard.
                </Paragraph>
              </InfoCard>

              <InfoCard
                styling={{
                  backgroundColor: '#c98fff',
                }}
              >
                <Heading4>Connect</Heading4>
                <Paragraph
                  styling={{
                    flexGrow: '0.7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  Create connections with others through the power of music.
                </Paragraph>
              </InfoCard>
            </Section>
          </BackGroundColoredDiv>
          <Section
            styling={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LeftContain>
              <InfoNode
                styling={{
                  backgroundColor: 'rgb(68, 9, 116)',
                  display: 'flex',
                  minWidth: '10vw',
                  width: 'fit-content',
                }}
              >
                <ImageHolder>
                  <FaTools
                    size="3rem"
                    style={{ color: 'rgb(169, 128, 226)' }}
                  />
                </ImageHolder>
                <div style={{ marginLeft: '3rem', marginRight: '3rem' }}>
                  <Heading4 styling={{ color: 'rgb(169, 128, 226)' }}>
                    lorme
                  </Heading4>
                  <Paragraph styling={{ color: 'rgb(169, 128, 226)' }}>
                    glade i am here
                  </Paragraph>
                </div>
              </InfoNode>
            </LeftContain>
          </Section>
        </div>
      </Layout>
    </main>
  );
}

export default Index;
