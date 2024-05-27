import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import {
  FaComment,
  FaLaughBeam,
  FaMicrophone,
  FaMicrophoneAlt,
} from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaRulerCombined } from 'react-icons/fa';
import styles from '../styles/index.module.css';

function Index() {
  return (
    <main className={styles.para}>
      <Layout>
        <div className={styles.header}>
          <h1 className="mt-3">Welcome to Music CPR</h1>
        </div>
        <div className={styles.higher}>
          <p>
            MusicCPR is a free platform that facilitates music teachers'
            collection of individual student achievement data that aligns with
            ensemble repertoire and artistic processes (create, perform,
            respond, connect) described in National Standards for Arts
            Education.
          </p>
        </div>
      </Layout>
    </main>
  );
}

export default Index;
