import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pitch Your Idea',
    Svg: require('@site/static/img/hp-pitch.svg').default,
    description: (
      <>
        Have an idea that you think would make a great project? Pitch it to the cohort in a presentation that is 5 minutes or less.
      </>
    ),
  },
  {
    title: 'Vote for the Best',
    Svg: require('@site/static/img/hp-vote.svg').default,
    description: (
      <>
        Using ranked voting, the participants will vote on which ideas they would like to work on the most.
      </>
    ),
  },
  {
    title: 'Build It!',
    Svg: require('@site/static/img/hp-build.svg').default,
    description: (
      <>
        Ideas with enough votes to form a team will group up and build the thing, updating the cohort on their progress along the way.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
