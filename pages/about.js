import Layout from '../components/layout';
import styles from '../styles/about.module.css';
import { useEffect, useRef } from 'react';
import { Section, Paragraph } from './index';

{
  /* <Container fluid>
        <h1 className="mt-3">About MusicCPR</h1> */
}
{
  /* <Row> */
}
{
  /* <Card style={{ width: '18rem' }} className="float-end ml-4">
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/scalefunder/image/upload/c_crop,h_2938,w_5184,x_0,y_68/c_scale,h_170,w_300/f_auto,fl_lossy,q_auto/v1/James_Madison_University/q4uzdgpi5evlfvrcj3qz"
          />
          <Card.Body>
            <Card.Title>Support us</Card.Title>
            <Card.Text>
              If you would be interested in supporting our project, click below.
            </Card.Text>
            <a
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dukesfunder.jmu.edu/project/30270"
            >
              Learn more
            </a>
          </Card.Body>
        </Card>
        <p>
          MusicCPR is a free web-based platform to promote standards-based
          instrumental music education. MusicCPR aligns with four artistic
          processes found in{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nafme.org/my-classroom/standards/"
          >
            National Standards for Music Education
          </a>
          : create, perform, respond, and connect and their manifestations in
          state standards for instrumental music education (e.g., New York's{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.nysed.gov/curriculum-instruction/arts-standards-implementation-resources"
          >
            Arts Learning Standards
          </a>
          , Virginia's{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://doe.virginia.gov/testing/sol/standards_docs/fine_arts/2020/2020fasol-music.pdf"
          >
            Music Standards of Learning
          </a>
          ).
        </p> */
}
{
  /* <Col> */
}

{
  /* <p>
          We provide teachers with research-based and standards-aligned tools
          for facilitating and assessing individual students' music learning.
          These tools connect with established repertoire on state music
          education association lists, as well as newly commissioned repertoire
          that highlights underrepresented musics and composers.
        </p>
        <p>
          MusicCPR is housed at James Madison University, in a collaboration
          between the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jmu.edu/cs"
          >
            Department of Computer Science
          </a>{' '}
          and the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jmu.edu/arts/ocp/index.shtml"
          >
            Office of Creative Propulsion
          </a>{' '}
          with collaborators at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rochester.edu/"
          >
            University of Rochester
          </a>
          's{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.esm.rochester.edu/"
          >
            Eastman School of Music
          </a>{' '}
          and in{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.udel.edu/"
          >
            University of Delaware
          </a>
          's{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.music.udel.edu/"
          >
            School of Music
          </a>
          . MusicCPR's development has been supported by these institutions, as
          well as{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://4-va.org/">
            4-VA Collaborative
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nafme.org/"
          >
            National Association for Music Education
          </a>
          .
        </p>
        <p>
          If you're interested in trying MusicCPR, or have a question for the
          team, don't hesitate to drop us a line at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:feedback@musiccpr.org"
          >
            feedback@musiccpr.org
          </a>
        </p>

        <h2>Investigators</h2>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.esm.rochester.edu/directory/caravan-lisa/"
            >
              Lisa R. Caravan, DMA
            </a>{' '}
            (Assistant Professor, Department of Music Teaching and Learning,
            Eastman School of Music, University of Rochester)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.esm.rochester.edu/directory/snell-alden/"
            >
              Alden H. Snell, II, Ph.D.
            </a>{' '}
            (Associate Professor, Department of Music Teaching and Learning,
            Eastman School of Music, University of Rochester)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hcientist.com"
            >
              Michael C. Stewart, Ph.D.
            </a>{' '}
            (Assistant Professor of Computer Science, James Madison University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jmu.edu/arts/people/stringham-david.shtml"
            >
              David A. Stringham, Ph.D.
            </a>{' '}
            (Professor of Music; Executive Director, Office of Creative
            Propulsion, James Madison University)
          </li>
        </ul>
        <h2>Collaborators</h2>
        <ul>
          <li>
            Abdullah Mohammed Ali (Undergraduate Student, James Madison
            University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://portfolium.com/AlexDumo"
            >
              Alex Dumouchelle
            </a>{' '}
            (Undergraduate Student, James Madison University)
          </li>
          <li>Zoey Fox (Consultant)</li>
          <li>
            Jonah Giblin (Undergraduate Student, James Madison University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://benguerrero.com/"
            >
              Benjamin Guerrero, MM
            </a>{' '}
            (Preparing Future Faculty Fellow, James Madison University; Ph.D.
            Candidate, University of Rochester)
          </li>
          <li>Luke Hennessy (Undergraduate, James Madison University)</li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mfwolffe.github.io/"
            >
              Matt Wolffe
            </a>
            (Undergraduate, James Madison University)
          </li>
          <li>
            Thomas Hassett (Undergraduate Student Alumnus, School of Music;
            Innovation Leader, Center for Inclusive Music Engagement; James
            Madison University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener nonreferrer"
              href="https://www.linkedin.com/in/chris-hopkins-382238221/"
            >
              Chris Hopkins{' '}
            </a>{' '}
            (Undergraduate Student, James Madison University)
          </li>
          <li>
            William Jedrzejczak (Undergraduate Student, James Madison
            University)
          </li>
          <li>
            Heidi Lucas, DMA (Visiting Assistant Professor of Brass and Music
            Education, University of Delaware)
          </li>
          <li>
            Brandon McKean (Systems Administrator, Department of Computer
            Science, James Madison University)
          </li>
          <li>
            Pete Morris (Systems Administrator, Department of Computer Science,
            James Madison University)
          </li>
          <li>Zamua Nasrawt (Consulting Musician and Web Developer)</li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LiemKN/"
            >
              Liem Nguyen (Undergraduate Student, James Madison University)
            </a>
          </li>
          <li>
            Meara Patterson (Undergraduate Student, James Madison University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jmu.edu/cise/people/faculty/riley-philip.shtml"
            >
              Phil Riley
            </a>{' '}
            (Lecturer in Computer Science, James Madison University)
          </li>
          <li>
            Isaiah Ortiz (Undergraduate Student, James Madison University)
          </li>
          <li>Nathan Self (Consulting Musician and Web Developer)</li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://pawelwozniak.eu/"
            >
              Paweł W. Woźniak, Ph.D.
            </a>{' '}
            (Associate Professor, Interaction Design and Software Engineering
            division, Department of Computer Science and Engineering, Chalmers
            University)
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://laurenyz.github.io/portfolio/"
            >
              Lauren Yu
            </a>{' '}
            (Web Developer)
          </li>
        </ul> */
}
{
  /* </Container> */
}

const collabs = [
  {
    name: 'Abdullah Mohammed Ali',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Alex Dumouchelle',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://portfolium.com/AlexDumo',
  },
  {
    name: 'Jerome Donfack',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Zoey Fox',
    profession: 'Consultant',
  },
  {
    name: 'Jonah Giblin',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Benjamin Guerrero, MM',
    profession:
      'Preparing Future Faculty Fellow, James Madison University; Ph.D. Candidate, University of Rochester',
    link: 'http://benguerrero.com/',
  },
  {
    name: 'Luke Hennessy',
    profession: 'Undergraduate, James Madison University',
  },
  {
    name: 'Matt Wolffe',
    profession: 'Undergraduate, James Madison University',
    link: 'https://mfwolffe.github.io/',
  },
  {
    name: 'Thomas Hassett',
    profession:
      'Undergraduate Student Alumnus, School of Music; Innovation Leader, Center for Inclusive Music Engagement; James Madison University',
  },
  {
    name: 'Chris Hopkins',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://www.linkedin.com/in/chris-hopkins-382238221/',
  },
  {
    name: 'William Jedrzejczak',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Heidi Lucas, DMA',
    profession:
      'Visiting Assistant Professor of Brass and Music Education, University of Delaware',
  },
  {
    name: 'Brandon McKean',
    profession:
      'Systems Administrator, Department of Computer Science, James Madison University',
  },
  {
    name: 'Pete Morris',
    profession:
      'Systems Administrator, Department of Computer Science, James Madison University',
  },
  {
    name: 'Zamua Nasrawt',
    profession: 'Consulting Musician and Web Developer',
  },
  {
    name: 'Liem Nguyen',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://github.com/LiemKN/',
  },
  {
    name: 'Meara Patterson',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Phil Riley',
    profession: 'Lecturer in Computer Science, James Madison University',
    link: 'https://www.jmu.edu/cise/people/faculty/riley-philip.shtml',
  },
  {
    name: 'Isaiah Ortiz',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Nathan Self',
    profession: 'Consulting Musician and Web Developer',
  },
  {
    name: 'Paweł W. Woźniak, Ph.D.',
    profession:
      'Associate Professor, Interaction Design and Software Engineering division, Department of Computer Science and Engineering, Chalmers University',
    link: 'http://pawelwozniak.eu/',
  },
  {
    name: 'Lauren Yu',
    profession: 'Web Developer',
    link: 'https://laurenyz.github.io/portfolio/',
  },
];

function Collaborators({ collabList }) {
  const collabRef = useRef(null);
  useEffect(() => {
    const collabs = collabRef.current.querySelectorAll('div');

    let count = 0;
    function changeFocus() {
      collabs[count].classList.remove(styles.collabShow);
      if (count == collabs.length - 1) {
        count = 0;
      } else {
        count++;
      }
      collabs[count].classList.add(styles.collabShow);
    }

    collabs.forEach((collab) => collab.classList.add(styles.collabHide));
    collabs[0].classList.add(styles.collabShow);

    const interval = setInterval(changeFocus, 7000); // Repeat every 7 seconds
  }, []);

  let htmlCollabs = collabList.map((person, id) => {
    let retHTML = (
      <div key={id}>
        <Paragraph>
          <span>
            {person.link ? (
              <a target="_blank" rel="noopener noreferrer" href={person.link}>
                {person.name}
              </a>
            ) : (
              person.name
            )}
            {' (' + person.profession + ')'}
          </span>
        </Paragraph>
      </div>
    );
    return retHTML;
  });

  return (
    <div className={styles.collabOuterContain}>
      <div className={styles.collabContain} ref={collabRef}>
        {htmlCollabs}
      </div>
    </div>
  );
}

function List({ children, key }) {
  return (
    <li className={styles.listContent} key={key}>
      {children}
    </li>
  );
}

function FullListContainer({ collabList }) {
  let htmlCollabs = collabList.map((person, id) => {
    let retHTML = (
      <List key={id}>
        {person.link ? (
          <a target="_blank" rel="noopener noreferrer" href={person.link}>
            {person.name}
          </a>
        ) : (
          person.name
        )}
        {' (' + person.profession + ')'}
      </List>
    );
    return retHTML;
  });
  return (
    <div className={styles.fullListContain}>
      <div className={styles.innterFullList}>
        <ul>{htmlCollabs}</ul>
      </div>
    </div>
  );
}

function ParagraphSection({ children, style }) {
  return (
    <div className={styles.paraContainer} style={style}>
      {children}
    </div>
  );
}

function FlexibleImage({ src }) {
  return (
    <figure className={styles.imgContain}>
      <img src={src} style={{ width: '100%', height: 'auto' }} />
    </figure>
  );
}

function About() {
  useEffect(() => {
    let scroller = document.querySelector('main');
    let scrolls = document.querySelectorAll(`.${styles.fullListContain}`);
    scroller.addEventListener('scroll', () => {
      scrolls.forEach((scroll) => {
        scroll.style.setProperty('--scroll', scroller.scrollTop + 'px');
      });
    });
  });
  return (
    <main className={styles.para}>
      <FullListContainer collabList={collabs}></FullListContainer>
      <Layout>
        <div className={styles.header}>
          <h1>About MusicCPR</h1>
        </div>
        <div className={styles.container}>
          <Section>
            <ParagraphSection>
              <Paragraph
                styling={{
                  flexShrink: '2',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>
                  MusicCPR is a free web-based platform to promote
                  standards-based instrumental music education. MusicCPR aligns
                  with four artistic processes found in{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nafme.org/my-classroom/standards/"
                  >
                    National Standards for Music Education
                  </a>
                  : create, perform, respond, and connect and their
                  manifestations in state standards for instrumental music
                  education (e.g., New York's{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.nysed.gov/curriculum-instruction/arts-standards-implementation-resources"
                  >
                    Arts Learning Standards
                  </a>
                  , Virginia's{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://doe.virginia.gov/testing/sol/standards_docs/fine_arts/2020/2020fasol-music.pdf"
                  >
                    Music Standards of Learning
                  </a>
                  ).
                </span>
              </Paragraph>
              <FlexibleImage src="manplayingguitar.jpg" />
            </ParagraphSection>
            <ParagraphSection>
              <FlexibleImage src="teachingmusic.jpg" />
              <Paragraph
                styling={{
                  flexShrink: '2',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                We provide teachers with research-based and standards-aligned
                tools for facilitating and assessing individual students' music
                learning. These tools connect with established repertoire on
                state music education association lists, as well as newly
                commissioned repertoire that highlights underrepresented musics
                and composers.
              </Paragraph>
            </ParagraphSection>
            <ParagraphSection>
              <div>
                <Paragraph
                  styling={{
                    flexShrink: '2',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span>
                    MusicCPR is housed at James Madison University, in a
                    collaboration between the{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://jmu.edu/cs"
                    >
                      Department of Computer Science
                    </a>{' '}
                    and the{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.jmu.edu/arts/ocp/index.shtml"
                    >
                      Office of Creative Propulsion
                    </a>{' '}
                    with collaborators at{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://rochester.edu/"
                    >
                      University of Rochester
                    </a>
                    's{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.esm.rochester.edu/"
                    >
                      Eastman School of Music
                    </a>{' '}
                    and in{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.udel.edu/"
                    >
                      University of Delaware
                    </a>
                    's{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.music.udel.edu/"
                    >
                      School of Music
                    </a>
                    . MusicCPR's development has been supported by these
                    institutions, as well as{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://4-va.org/"
                    >
                      4-VA Collaborative
                    </a>{' '}
                    and{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nafme.org/"
                    >
                      National Association for Music Education
                    </a>
                    .
                  </span>
                </Paragraph>
                <Paragraph>
                  If you're interested in trying MusicCPR, or have a question
                  for the team, don't hesitate to drop us a line at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:feedback@musiccpr.org"
                  >
                    feedback@musiccpr.org
                  </a>
                </Paragraph>
              </div>
              <FlexibleImage src="JMU.jpg" />
            </ParagraphSection>
            <Collaborators collabList={collabs}></Collaborators>
          </Section>
        </div>
      </Layout>
    </main>
  );
}

export default About;
