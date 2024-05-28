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
} from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaRulerCombined } from 'react-icons/fa';
import styles from '../styles/index.module.css';

function InfoNode({ children, styling }) {
  return (
    <div className={styles.nodes} style={styling}>
      {children}
    </div>
  );
}

function Section({ children, styling }) {
  return (
    <div className={styles.higher} style={styling}>
      {children}
    </div>
  );
}

function Heading4({ children }) {
  return <h4 className={styles.headings4}>{children}</h4>;
}

function Paragraph({ children, styling }) {
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
          <h1 className="mt-3">Welcome to Music CPR</h1>
        </div>
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
            <h3 className={styles.heading3}>Standards-Based Music Education</h3>
            <Paragraph style={{ margin: '2rem', marginBottom: '0' }}>
              Music CPR is a web based appilcation that faciliates and educates
              students to create, perform, respond, and connect through msuic.
            </Paragraph>
          </InfoNode>
        </Section>
        <Section
          styling={{
            backgroundColor: '#AF91CB',
            padding: '8rem',
            paddingLeft: '5rem',
            paddingRight: '5rem',
            display: 'grid',
            // gridTemplateColumns: '1fr 1fr 1fr 1fr',
            // gridTemplateRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            // gridAutoRows: '300px',
            // gridTemplateRows: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '20px',
          }}
        >
          <InfoNode
            styling={{
              backgroundColor: 'blue',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#8D45D0',
            }}
          >
            <Heading4>Create</Heading4>
            <Paragraph
              styling={{
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Learn to create music in new and unqiue ways.
            </Paragraph>
          </InfoNode>

          <InfoNode
            styling={{
              backgroundColor: 'blue',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#8D45D0',
            }}
          >
            <Heading4>Perform</Heading4>
            <Paragraph
              styling={{
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Master the ability to perform your own music.
            </Paragraph>
          </InfoNode>

          <InfoNode
            styling={{
              backgroundColor: 'blue',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#8D45D0',
            }}
          >
            <Heading4>Respond</Heading4>
            <Paragraph
              styling={{
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Express any of your thoughts and respond to music heard.
            </Paragraph>
          </InfoNode>

          <InfoNode
            styling={{
              backgroundColor: 'blue',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#8D45D0',
            }}
          >
            <Heading4>Connect</Heading4>
            <Paragraph
              styling={{
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Create connections with others through the power of music.
            </Paragraph>
          </InfoNode>
        </Section>
      </Layout>
    </main>
  );
}

export default Index;
