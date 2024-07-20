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
        Have an idea that you think would make a great project? Pitch it to the cohort in a 5 minute presentation.
      </>
    ),
  },
  {
    title: 'Vote for the Best',
    Svg: require('@site/static/img/hp-vote.svg').default,
    description: (
      <>
        Once the pitches are done, the participants will vote on which idea they like the best or would like to work on.
      </>
    ),
  },
  {
    title: 'Build It!',
    Svg: require('@site/static/img/hp-build.svg').default,
    description: (
      <>
        Teams will form around the top ideas and work to build it out, giving updates to everyone once a quarter.
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
